import { members } from "../data/members.js";
import { borrows } from "./borrowService.js";
import { validateMember } from "../utilis/validator.js";
import { formatMemberName } from "../utilis/helpers.js";

const normalizeId = (value) => Number(value);

function getMemberById(memberId) {
  return members.find((member) => member.id === normalizeId(memberId)) ?? null;
}

export function registerMember(memberData) {
  validateMember(memberData);

  const normalizedMember = {
    id: normalizeId(memberData.id ?? Date.now()),
    firstName: memberData.firstName ?? memberData.name?.split(" ")[0] ?? "",
    lastName: memberData.lastName ?? memberData.name?.split(" ").slice(1).join(" ") ?? "",
    email: memberData.email,
    phone: memberData.phone ?? "",
    borrowedBooks: []
  };

  members.push(normalizedMember);
  return normalizedMember;
}

export function viewMembers() {
  return members.map((member) => ({
    id: member.id,
    name: formatMemberName(member),
    email: member.email,
    phone: member.phone,
    borrowedBooks: [...member.borrowedBooks]
  }));
}

export function searchMemberById(memberId) {
  return getMemberById(memberId);
}

export function searchMembersByName(name) {
  const query = String(name ?? "").trim().toLowerCase();
  if (!query) return [...members];

  return members.filter((member) => {
    const fullName = formatMemberName(member).toLowerCase();
    return fullName.includes(query);
  });
}

export function searchMemberByEmail(email) {
  const query = String(email ?? "").trim().toLowerCase();
  return members.find((member) => member.email.toLowerCase() === query) ?? null;
}

export function updateMember(memberId, updates) {
  const member = getMemberById(memberId);
  if (!member) {
    throw new Error("Member not found");
  }

  const allowedUpdates = ["firstName", "lastName", "email", "phone"];
  for (const key of Object.keys(updates ?? {})) {
    if (!allowedUpdates.includes(key)) {
      throw new Error(`Update not allowed: ${key}`);
    }
  }

  Object.assign(member, updates);
  return member;
}

export function deleteMember(memberId) {
  const member = getMemberById(memberId);
  if (!member) {
    throw new Error("Member not found");
  }

  const hasActiveBorrows = borrows.some(
    (borrow) => borrow.memberId === normalizeId(memberId) && !borrow.returned
  );

  if (hasActiveBorrows) {
    throw new Error("Cannot delete member with active borrows");
  }

  const index = members.findIndex((item) => item.id === normalizeId(memberId));
  if (index === -1) {
    return false;
  }

  members.splice(index, 1);
  return true;
}


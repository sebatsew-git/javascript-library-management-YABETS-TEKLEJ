import { books } from "../data/books.js";
import { members } from "../data/members.js";

function normalizeId(value) {
  return Number(value);
}

export function validateBook(bookData) {
  if (!bookData || !bookData.title || !bookData.author || !bookData.isbn) {
    throw new Error("Missing required book fields");
  }

  const totalCopies = Number(bookData.totalCopies ?? bookData.copies ?? 0);
  const availableCopies = Number(bookData.availableCopies ?? totalCopies);

  if (!Number.isInteger(totalCopies) || totalCopies < 0) {
    throw new Error("Invalid copy count");
  }

  if (!Number.isInteger(availableCopies) || availableCopies < 0 || availableCopies > totalCopies) {
    throw new Error("Invalid available copy count");
  }

  const duplicateBook = books.find(
    (book) => book.id === normalizeId(bookData.id) || book.isbn === bookData.isbn

  );

  if (duplicateBook) {
    throw new Error("Duplicate book ID or ISBN");
  }
}

export function validateMember(memberData) {
  if (!memberData) {
    throw new Error("Missing member data");
  }

  const fullName =
    memberData.name ?? `${memberData.firstName ?? ""} ${memberData.lastName ?? ""}`.trim();

  if (!fullName || !memberData.email) {
    throw new Error("Missing required member fields");
  }

  const duplicateMember = members.find(
    (member) =>
      member.id === normalizeId(memberData.id) ||

      member.email === memberData.email ||
      member.phone === memberData.phone
  );

  if (duplicateMember) {
    throw new Error("Duplicate member ID, email, or phone number");
  }
}

export function validateBorrowRequest(memberId, bookId) {
  if (!memberId || !bookId) {
    throw new Error("Invalid member or book ID");
  }

  const member = members.find((item) => item.id === normalizeId(memberId));
  const book = books.find((item) => item.id === normalizeId(bookId));


  if (!member) {
    throw new Error("Member not found");
  }

  if (!book) {
    throw new Error("Book not found");
  }

  if (book.availableCopies <= 0) {
    throw new Error("Book is unavailable");
  }
}

export function validateReturnRequest(memberId, bookId) {
  if (!memberId || !bookId) {
    throw new Error("Invalid member or book ID");
  }

  const member = members.find((item) => item.id === normalizeId(memberId));
  const book = books.find((item) => item.id === normalizeId(bookId));


  if (!member) {
    throw new Error("Member not found");
  }

  if (!book) {
    throw new Error("Book not found");
  }
}


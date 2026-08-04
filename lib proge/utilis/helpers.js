export function findById(items, id) {
  return items.find((item) => item.id === id) ?? null;
}

export function matchesText(value, searchTerm) {
  if (value === null || value === undefined) {
    return false;
  }

  return String(value).toLowerCase().includes(String(searchTerm ?? "").toLowerCase());
}

export function formatMemberName(member) {
  if (!member) {
    return "";
  }

  if (member.firstName || member.lastName) {
    const first = member.firstName ?? "";
    const last = member.lastName ?? "";
    return `${first} ${last}`.trim();
  }

  return member.name ?? "";
}


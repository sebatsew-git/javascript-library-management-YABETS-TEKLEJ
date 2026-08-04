export function validateBook(bookData) {
  // TODO: Validate book fields, duplicate IDs, ISBNs, and copy counts.
  throw new Error("TODO: Implement validateBook");
}

export function validateMember(memberData) {
  // TODO: Validate member fields, duplicate IDs, emails, and phone numbers.
  throw new Error("TODO: Implement validateMember");
}

export function validateBorrowRequest(memberId, bookId) {
  // TODO: Validate borrow business rules before borrowing.
  throw new Error("TODO: Implement validateBorrowRequest");
}

export function validateReturnRequest(memberId, bookId) {
  // TODO: Validate return business rules before returning.
  throw new Error("TODO: Implement validateReturnRequest");
}

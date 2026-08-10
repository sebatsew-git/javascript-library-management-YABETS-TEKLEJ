import { books } from "../data/books.js";
import { members } from "../data/members.js";
import { validateBorrowRequest, validateReturnRequest } from "../utilis/validator.js";

export const borrows = [];

const normalizeId = (value) => Number(value);

function getMember(memberId) {
  return members.find((member) => member.id === normalizeId(memberId)) ?? null;
}

function getBook(bookId) {
  return books.find((book) => book.id === normalizeId(bookId)) ?? null;
}

function getActiveBorrow(memberId, bookId) {
  const id = normalizeId(memberId);
  const book = normalizeId(bookId);

  return (
    borrows.find(
      (borrow) => borrow.memberId === id && borrow.bookId === book && !borrow.returned
    ) ?? null
  );
}

export function borrowBook(memberId, bookId) {
  validateBorrowRequest(memberId, bookId);

  const member = getMember(memberId);
  const book = getBook(bookId);
  const safeBookId = normalizeId(bookId);

  if (!member.borrowedBooks.includes(safeBookId)) {
    member.borrowedBooks.push(safeBookId);
  }

  book.availableCopies -= 1;

  const borrowRecord = {
    id: Date.now(),
    memberId: normalizeId(memberId),
    bookId: safeBookId,
    borrowedAt: new Date().toISOString(),
    returned: false
  };

  borrows.push(borrowRecord);
  return borrowRecord;
}

export function returnBook(memberId, bookId) {
  validateReturnRequest(memberId, bookId);

  const member = getMember(memberId);
  const book = getBook(bookId);
  const borrowRecord = getActiveBorrow(memberId, bookId);

  if (!borrowRecord) {
    throw new Error("No active borrow found");
  }

  borrowRecord.returned = true;
  borrowRecord.returnedAt = new Date().toISOString();

  book.availableCopies += 1;
  member.borrowedBooks = member.borrowedBooks.filter(
    (id) => id !== normalizeId(bookId)
  );

  return borrowRecord;
}


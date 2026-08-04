import { books } from "../data/books.js";
import { members } from "../data/members.js";
import { borrows } from "./borrowService.js";

function getActiveBorrows() {
  return borrows.filter((borrow) => !borrow.returned);
}

export function getLibraryStatistics() {
  const activeBorrowList = getActiveBorrows();

  return {
    totalBooks: books.length,
    uniqueTitles: new Set(books.map((book) => book.title)).size,
    totalMembers: members.length,
    activeBorrows: activeBorrowList.length,
    totalCopies: books.reduce((total, book) => total + Number(book.totalCopies ?? 0), 0)
  };
}

export function getBooksGroupedByCategory() {
  return books.reduce((grouped, book) => {
    const category = book.category ?? "Uncategorized";
    grouped[category] = grouped[category] ?? [];
    grouped[category].push(book);
    return grouped;
  }, {});
}

export function getMostBorrowedCategory() {
  if (!borrows.length) {
    return null;
  }

  const categoryCounts = borrows.reduce((counts, borrow) => {
    const book = books.find((item) => item.id === borrow.bookId);
    if (!book) return counts;

    const category = book.category ?? "Uncategorized";
    counts[category] = (counts[category] ?? 0) + 1;
    return counts;
  }, {});

  const mostBorrowed = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0];
  return mostBorrowed ? mostBorrowed[0] : null;
}

export function getBooksPublishedAfter(year) {
  const targetYear = Number(year);
  return books.filter((book) => Number(book.publicationYear) > targetYear);
}

export function getUnavailableBooks() {
  return books.filter((book) => Number(book.availableCopies ?? 0) === 0);
}

export function getMembersWithActiveBorrows() {
  const activeMemberIds = getActiveBorrows().map((borrow) => borrow.memberId);
  return members.filter((member) => activeMemberIds.includes(member.id));
}


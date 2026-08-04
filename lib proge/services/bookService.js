import { books } from "../data/books.js";
import { borrows } from "./borrowService.js";
import { validateBook } from "../utilis/validator.js";

const normalizeId = (value) => Number(value);
const normalizeText = (value) => String(value ?? "").trim().toLowerCase();

export function addBook(bookData) {
  validateBook(bookData);

  const normalizedBook = {
    ...bookData,
    id: normalizeId(bookData.id ?? Date.now()),
    totalCopies: Number(bookData.totalCopies ?? bookData.copies ?? 0),
    availableCopies: Number(
      bookData.availableCopies ?? bookData.totalCopies ?? bookData.copies ?? 0
    )
  };

  books.push(normalizedBook);
  return normalizedBook;
}

export function viewAllBooks() {
  return [...books];
}

export function searchBookById(bookId) {
  const id = normalizeId(bookId);
  return books.find((book) => book.id === id) ?? null;
}

export function searchBooksByTitle(title) {
  const query = normalizeText(title);
  if (!query) return [...books];

  return books.filter((book) => normalizeText(book.title).includes(query));
}

export function searchBooksByAuthor(author) {
  const query = normalizeText(author);
  if (!query) return [...books];

  return books.filter((book) => normalizeText(book.author).includes(query));
}

export function searchBooksByCategory(category) {
  const query = normalizeText(category);
  if (!query) return [...books];

  return books.filter((book) => normalizeText(book.category).includes(query));
}

export function updateBook(bookId, updates) {
  const id = normalizeId(bookId);
  const bookIndex = books.findIndex((item) => item.id === id);

  if (bookIndex === -1) {
    throw new Error("Book not found");
  }

  const allowedUpdates = [
    "title",
    "author",
    "category",
    "publicationYear",
    "isbn",
    "totalCopies",
    "availableCopies"
  ];

  const updateKeys = Object.keys(updates ?? {});
  for (const key of updateKeys) {
    if (!allowedUpdates.includes(key)) {
      throw new Error(`Update not allowed: ${key}`);
    }
  }

  const updatedBook = {
    ...books[bookIndex],
    ...updates
  };

  books[bookIndex] = updatedBook;
  return updatedBook;
}

export function deleteBook(bookId) {
  const id = normalizeId(bookId);
  const bookIndex = books.findIndex((item) => item.id === id);

  if (bookIndex === -1) {
    throw new Error("Book not found");
  }

  const hasActiveBorrow = borrows.some(
    (borrow) => borrow.bookId === id && !borrow.returned
  );

  if (hasActiveBorrow) {
    throw new Error("Cannot delete book with active borrows");
  }

  books.splice(bookIndex, 1);
  return true;
}


import { books } from "../data/books.js";
import { members } from "../data/members.js";
import {
  addBook,
  viewAllBooks,
  searchBookById,
  searchBooksByTitle,
  searchBooksByAuthor,
  searchBooksByCategory,
  updateBook,
  deleteBook
} from "../services/bookService.js";
import {
  registerMember,
  viewMembers,
  searchMemberById,
  searchMembersByName,
  searchMemberByEmail,
  updateMember,
  deleteMember
} from "../services/memberService.js";
import { borrowBook, returnBook } from "../services/borrowService.js";
import {
  getLibraryStatistics,
  getBooksGroupedByCategory,
  getMostBorrowedCategory,
  getBooksPublishedAfter,
  getUnavailableBooks,
  getMembersWithActiveBorrows
} from "../services/reportService.js";

console.log("Library Management System Starter");
console.log("Books loaded:", books.length);
console.log("Members loaded:", members.length);
console.log("Library statistics:", getLibraryStatistics());
console.log("Sample book search:", searchBookById(2));
console.log("Sample member search:", searchMemberById(101));

// Example usage after implementation:
// addBook({
//   id: 7,
//   title: "The Pragmatic Programmer",
//   author: "Andrew Hunt",
//   category: "Programming",
//   publicationYear: 1999,
//   isbn: "9780201616224",
//   totalCopies: 3,
//   availableCopies: 3
// });
// registerMember({
//   id: 104,
//   firstName: "Sarah",
//   lastName: "Brown",
//   email: "sarah@example.com",
//   phone: "0978901234"
// });
// borrowBook(101, 1);
// returnBook(101, 1);
// console.log(viewAllBooks());
// console.log(viewMembers());

void addBook;
void viewAllBooks;
void searchBookById;
void searchBooksByTitle;
void searchBooksByAuthor;
void searchBooksByCategory;
void updateBook;
void deleteBook;
void registerMember;
void viewMembers;
void searchMemberById;
void searchMembersByName;
void searchMemberByEmail;
void updateMember;
void deleteMember;
void borrowBook;
void returnBook;
void getLibraryStatistics;
void getBooksGroupedByCategory;
void getMostBorrowedCategory;
void getBooksPublishedAfter;
void getUnavailableBooks;
void getMembersWithActiveBorrows;
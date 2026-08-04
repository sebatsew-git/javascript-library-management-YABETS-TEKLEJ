
import { books } from "./data/books.js";
import { members } from "./data/members.js";
import {
  addBook,
  viewAllBooks,
  searchBookById,
  searchBooksByTitle,
  searchBooksByAuthor,
  searchBooksByCategory,
  updateBook,
  deleteBook
} from "./services/bookService.js";
import {
  registerMember,
  viewMembers,
  searchMemberById,
  searchMembersByName,
  searchMemberByEmail,
  updateMember,
  deleteMember
} from "./services/memberService.js";
import { borrowBook, returnBook } from "./services/borrowService.js";
import {
  getLibraryStatistics,
  getBooksGroupedByCategory,
  getMostBorrowedCategory,
  getBooksPublishedAfter,
  getUnavailableBooks,
  getMembersWithActiveBorrows
} from "./services/reportService.js";

console.log("Library Management System Starter");
console.log("Books loaded:", books.length);
console.log("Members loaded:", members.length);
console.log("Uncomment sample calls in app.js after implementing the service functions.");

// Sample calls for students to use after implementing the functions:
// addBook({
//   id: 1,
//   title: "Clean Code",
//   author: "Robert C. Martin",
//   category: "Programming",
//   publicationYear: 2008,
//   isbn: "9780132350884",
//   totalCopies: 5,
//   availableCopies: 5
// });
//
// registerMember({
//   id: 101,
//   firstName: "John",
//   lastName: "Doe",
//   email: "john@example.com",
//   phone: "0912345678",
//   borrowedBooks: []
// });
//
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
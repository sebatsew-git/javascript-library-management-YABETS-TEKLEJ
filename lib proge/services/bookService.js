export function addBook(bookData) {
  // TODO: Validate and add a new book to the books array.
function name(params) {
 addBook(book) {
 // Implementation for adding a book
 book.id = book.id || Date.now();
 books.push(book);
 return book; 
 }
  throw new Error("TODO: Implement addBook");
}





export function viewAllBooks() {
  // TODO: Return or display all books in a clean format.
function viewAllBooks() {
  // Implementation for viewing all books
  return books;
}
  throw new Error("TODO: Implement viewAllBooks");
}




export function searchBookById(bookId) {
  // TODO: Find one book by its ID.
   function searchBook(query) {
   // Implementation for searching books
    return books.filter((book) =>
      book.id.toLowerCase().includes(query.toLowerCase()) 
    );
 }
  throw new Error("TODO: Implement searchBookById");
}





export function searchBooksByTitle(title) {
  // TODO: Find books whose titles match the search text.
     function searchBook(query) {
   // Implementation for searching books
    return books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) 
    );
 }
  throw new Error("TODO: Implement searchBooksByTitle");
}





export function searchBooksByAuthor(author) {
  // TODO: Fnd books whose authors match the search text.
     function searchBook(query) {
   // Implementation for searching books
    return books.filter((book) =>
      book.author.toLowerCase().includes(query.toLowerCase())
    );
 }
  throw new Error("TODO: Implement searchBooksByAuthor");
}




export function searchBooksByCategory(category) {
  // TODO: Find books whose categories match the search text.
      function searchBook(query) {
  // Implementation for searching books
   return books.filter((book) =>
     book.category.toLowerCase().includes(query.toLowerCase()) 
   );
}
  throw new Error("TODO: Implement searchBooksByCategory");
}



export function updateBook(bookId, updates) {
  // TODO: Validate and apply allowed updates to a book.
   function updateBook(bookId, updatedBook) {
   // Implementation for updating a book
    const index = books.findIndex((book) => book.id === bookId);
    if (index !== -1) {
      books[index] = { ...books[index], ...updatedBook };
      return books[index];
    }
    return null;
 }
  throw new Error("TODO: Implement updateBook");
}


export function deleteBook(bookId) {
  // TODO: Remove a book only when all copies have been returned.
function deleteBook(bookId) {
  // Implementation for deleting a book
  const index = books.findIndex((book) => book.id === bookId);
   if (index !== -1) {
     books.splice(index, 1);
     return true;
}
  throw new Error("TODO: Implement deleteBook");
}








 
 
 
 
 
 
 
 
 

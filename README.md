# JavaScript Library Management System

## Project Description
This project is a console-based JavaScript library management system implemented to manage books, library members, borrowing activities, returning records, and essential reporting functions. The application is designed to demonstrate realistic data management and business logic in a simple but structured way.

The project uses JavaScript modules to separate the system into data storage, business logic, and validation layers. It helps users practice core programming concepts such as arrays, objects, functions, conditional rules, and modular code organization in a practical library setting.

## Detailed Feature Overview
The system includes the following features:

- Add new books to the library
- View all books in the collection
- Search books by ID, title, author, and category
- Update book information
- Delete books only when no active borrowing exists
- Register new library members
- View all members
- Search members by ID, name, and email
- Update member details
- Delete members only when they have no active borrows
- Borrow books from the library
- Return borrowed books
- Track borrow and return activity
- Check library statistics
- Identify the most borrowed category
- Find books published after a given year
- Find unavailable books
- List members with active borrows

## JavaScript Concepts, ES6+ Features, and Array Methods Utilized
This project uses multiple JavaScript concepts and modern ES6+ features.

### JavaScript concepts used
- Variables and data types
- Functions and reusable logic
- Objects and arrays
- Conditional statements and validation rules
- Error handling with `throw new Error()`
- Data modeling for a real-world system
- Modular design using JavaScript imports and exports

### ES6+ features used
- Arrow functions
- Template literals
- Object spread syntax
- Destructuring assignments
- `Set` for unique data collection
- `Number()` conversion and type normalization
- Optional chaining (`?.`)
- Nullish coalescing (`??`)
- ES module syntax with `import` and `export`

### Array methods used
- `map()`
- `filter()`
- `find()`
- `findIndex()`
- `reduce()`
- `some()`

These methods are used to search records, validate input, organize categories, calculate statistics, and manage member and book records efficiently.

## Folder Structure Breakdown
```text
javascript-library-management-YABETS TEKLE/
├── README.md
├── lib proge/
│   ├── data/
│   │   ├── books.js
│   │   └── members.js
│   ├── library-management/
│   │   ├── app.js
│   │   ├── package.json
│   │   └── README.md
│   ├── services/
│   │   ├── bookService.js
│   │   ├── borrowService.js
│   │   ├── memberService.js
│   │   └── reportService.js
│   └── utilis/
│       ├── helpers.js
│       └── validator.js
```

### Folder purposes
- `data/`: contains the sample book and member records
- `services/`: contains the business logic for books, members, borrowing, and reporting
- `utilis/`: contains reusable helper functions and input validation logic
- `library-management/`: contains the entry point for the application and project configuration



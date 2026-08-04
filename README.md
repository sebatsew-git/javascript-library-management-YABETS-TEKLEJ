# JavaScript Library Management System

## Project Description
This project is a console-based JavaScript library management system designed to manage books, members, borrowing and returning records, and basic library reporting. It demonstrates how JavaScript can be used to model real-world library operations in a structured and modular way.

The system is built using ES modules and organized into separate folders for data, services, and validation utilities. It helps users understand how to work with arrays, objects, functions, and business rules in a realistic application.

## Detailed Feature Overview
- Add new books to the library
- View all available books
- Search books by ID, title, author, and category
- Update book details
- Delete books only when no active borrow exists
- Register new members
- View all members
- Search members by ID, name, and email
- Update member information
- Delete members only when they have no active borrow
- Borrow books from the library
- Return borrowed books
- Track active borrowing records
- Generate library statistics
- Identify the most borrowed category
- Find books published after a selected year
- Display unavailable books
- Show members with active borrows

## JavaScript Concepts, ES6+ Features, and Array Methods Utilized
This project applies several important JavaScript concepts and modern features:

### JavaScript concepts
- Variables and data types
- Functions and function parameters
- Objects and arrays
- Control flow with conditionals
- Error handling using try/catch and throw
- Modular programming with import/export
- Business logic separation into service files

### ES6+ features used
- Arrow functions
- Template literals
- Object literals
- Destructuring
- Spread operator (...)
- Map and Set
- `Number()` conversion
- Optional chaining (`?.`)
- Nullish coalescing (`??`)
- `import` and `export` modules

### Array methods used
- `map()`
- `filter()`
- `find()`
- `findIndex()`
- `reduce()`
- `some()`

These methods are used to search, validate, filter, group, and summarize records effectively.

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
- `data/`: stores all initial book and member data
- `services/`: contains business logic for each module
- `utilis/`: contains helper and validation functions
- `library-management/`: contains the app entry point and project configuration

## Conclusion
This project demonstrates how JavaScript can be used to build a small but realistic application with modular code, reusable functions, and data-driven logic. It is a strong example of how to structure and manage a simple system using ES modules and array-based data operations.


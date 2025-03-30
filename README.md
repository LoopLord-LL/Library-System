# Library System

This is a simple **Library System** implemented in JavaScript. It allows users to add and remove books, borrow and return books, and manage a collection of books in a library.

## Features

- **Book Management**: Add, remove, and list books.
- **Library System**: Store multiple books and allow searching by ISBN.
- **Member System**: Borrow and return books as a library member.
- **Availability Check**: Ensure books cannot be borrowed if no copies are available.

## Classes & Methods

### Book Class

Represents a book in the library.

#### Properties:

- `title` (string) - The title of the book.
- `author` (string) - The author's name.
- `year` (number) - The year of publication.
- `isbn` (string) - The book's unique ISBN.
- `availableCopies` (number) - The number of copies available in the library.

#### Methods:

- `checkOut()` - Reduces available copies by 1 if available.
- `returnBook()` - Increases available copies by 1.
- `getBookInfo()` - Returns book details as a string.

---

### Library Class

Represents a library that holds books.

#### Properties:

- `name` (string) - Name of the library.
- `books` (array) - Collection of books.

#### Methods:

- `addBook(book)` - Adds a book to the library.
- `removeBook(isbn)` - Removes a book using its ISBN.
- `listBooks()` - Lists all books in the library.
- `findBookByIsbn(isbn)` - Finds a book by its ISBN.

---

### Member Class

Represents a library member who can borrow books.

#### Properties:

- `name` (string) - Name of the member.
- `takenBooks` (array) - List of borrowed books.

#### Methods:

- `takeBook(isbn, library)` - Borrows a book if available.
- `returnBook(isbn)` - Returns a borrowed book.
- `getTakenBooks()` - Lists all borrowed books.

---

## Usage

```javascript
// Create a library
let myLibrary = new Library("City Library");

// Create books
let book1 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  1925,
  "978-3-16-148410-0",
  3
);
let book2 = new Book("1984", "George Orwell", 1949, "978-0-452-28423-4", 2);

// Add books to library
myLibrary.addBook(book1);
myLibrary.addBook(book2);

// Create a member
let member1 = new Member("Alice");

// Borrow a book
member1.takeBook("978-0-452-28423-4", myLibrary);

// Return a book
member1.returnBook("978-0-452-28423-4");
```

## Edge Cases Tested

- Borrowing a book that has no copies available.
- Returning a book that was not borrowed.
- Removing a book from the library and ensuring it cannot be borrowed.

## License

This project is open-source and free to use.

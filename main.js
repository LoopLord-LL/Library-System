class Book {
  constructor(title, author, year, isbn, availableCopies) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isbn = isbn;
    this.availableCopies = availableCopies;
  }
  checkOut() {
    if (this.availableCopies > 0) {
      this.availableCopies--;
      console.log(`There are ${this.availableCopies} copies available!`);
    } else {
      console.log("No copies available");
    }
  }
  returnBook() {
    this.availableCopies++;
    console.log(`There are ${this.availableCopies} copies available!`);
  }
  getBookInfo() {
    return `title: ${this.title} author: ${this.author} year: ${this.year} isbn: ${this.isbn} availableCopies: ${this.availableCopies}`;
  }
}

class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }
  addBook(book) {
    this.books.push(book);
  }
  removeBook(isbn) {
    this.books = this.books.filter((book) => book.isbn !== isbn);
  }
  listBooks() {
    this.books.forEach((book) => {
      console.log(book.getBookInfo());
    });
  }
  findBookByIsbn(isbn) {
    return this.books.find((book) => book.isbn == isbn);
  }
}

class Member {
  constructor(name, takenBooks = []) {
    this.name = name;
    this.takenBooks = takenBooks;
  }

  takeBook(isbn, library) {
    let checkBook = library.books.find((book) => book.isbn === isbn);

    if (checkBook && checkBook.availableCopies > 0) {
      checkBook.availableCopies--;
      this.takenBooks.push(checkBook);
      console.log(`${checkBook.title} taken successfully.`);
    } else {
      console.log("Book is not available.");
    }
  }

  returnBook(isbn) {
    let bookIndex = this.takenBooks.findIndex((book) => book.isbn === isbn);

    if (bookIndex !== -1) {
      let returnedBook = this.takenBooks.splice(bookIndex, 1)[0];
      returnedBook.availableCopies++;
      console.log(`${returnedBook.title} returned successfully.`);
    } else {
      console.log("This book is not in your borrowed list.");
    }
  }

  getTakenBooks() {
    if (this.takenBooks.length === 0) {
      console.log("No books borrowed.");
    } else {
      console.log("All taken books:");
      this.takenBooks.forEach((book) => console.log(book.getBookInfo()));
    }
  }
}

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
  

// class Library {
//   constructor(name, books) {
//     this.name = name;
//     this.books = books[Book];
//   }
//   addBook(book) {
//     books += book;
//   }
//   removeBook(isbn) {}
// }

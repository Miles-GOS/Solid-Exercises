import { Library } from "./Library";
import { Book } from "./Book";

const library = new Library();

let book1: Book;
book1 = new Book("Clean Code", "Edric Cao", 2023);

let book2: Book;
book2 = new Book("Design Pattern", "Edric Cao", 2022);

library.addBook(book1);
library.addBook(book2);
console.log(library.getBookByTitle("Clean Code"));

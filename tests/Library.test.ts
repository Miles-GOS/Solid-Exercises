import { Library } from "../Solid/1.Srp_exercise/Library";
import { Book } from "../Solid/1.Srp_exercise/Book";
describe("Library", () => {
  let library: Library;
  let book1: Book;
  let book2: Book;

  beforeEach(() => {
    library = new Library();
    book1 = new Book("Clean Code", "Edric Cao", 2023);
    book2 = new Book("Design Pattern", "Edric Cao", 2022);
    library.addBook(book1);
    library.addBook(book2);
  });

  test("should add books to the library", () => {
    expect(library.getTotalNumberOfBooks()).toBe(2);
  });

  test("should get a book by title", () => {
    expect(library.getBookByTitle("Clean Code")).toEqual(book1);
    expect(library.getBookByTitle("Design Pattern")).toEqual(book2);
    expect(library.getBookByTitle("Non-existent Book")).toBeUndefined();
  });

  test("should remove a book from the library", () => {
    library.removeBook("Clean Code");
    expect(library.getTotalNumberOfBooks()).toBe(1);
    expect(library.getBookByTitle("Clean Code")).toBeUndefined();
  });

  test("should return all books", () => {
    expect(library.getListBooks()).toEqual([book1, book2]);
  });

  test("should get books by author", () => {
    const booksByAuthor = library.getBooksByAuthor("Edric Cao");
    expect(booksByAuthor.length).toBe(2);
    expect(booksByAuthor).toContain(book1);
    expect(booksByAuthor).toContain(book2);
  });

  test("should get books by publication year", () => {
    const books2023 = library.getBooksByPublicationYear(2023);
    expect(books2023).toContain(book1);
    expect(books2023.length).toBe(1);
  });
});

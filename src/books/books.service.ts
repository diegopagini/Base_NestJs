import { Injectable } from '@nestjs/common';

import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  private readonly books: Book[] = []; // To simulate our DB.

  /**
   * Method to create a new book.
   * @param {Book} body
   */
  createBook(body: Book): void {
    const newBook: Book = {
      book_id: this.addId(),
      ...body,
    };

    this.books.push(newBook);
  }

  /**
   * Method to get all books.
   * @returns Book[]
   */
  getBooks(): Book[] {
    return this.books;
  }

  /**
   * Method to get a book by id.
   * @param {number} id
   * @returns Book
   */
  getBook(id: number): Book {
    return this.books[this.findById(id)];
  }

  /**
   * Method to update a book.
   * @param {number} id
   * @param {Book} book
   * @returns Book
   */
  editBook(id: number, book: Book): Book {
    const index = this.findById(id);
    this.books.splice(index, 1, book);
    return this.books[index];
  }

  /**
   * Method to delete a book.
   * @param {number} id
   */
  deleteBook(id: number): void {
    const index = this.findById(id);
    this.books.splice(index, 1);
  }

  /**
   * Method to know the get a non repeated id.
   * @returns number
   */
  private addId(): number {
    if (this.books.length > 0) {
      return this.books[this.books.length - 1].book_id + 1;
    } else {
      return 1;
    }
  }

  /**
   * Method to find a book in our list by id.
   * @param {number} id
   * @returns number;
   */
  private findById(id: number): number {
    let index: number;
    this.books.forEach((book: Book, i: number) => {
      if (book.book_id == id) {
        index = i;
      }
    });

    return index;
  }
}

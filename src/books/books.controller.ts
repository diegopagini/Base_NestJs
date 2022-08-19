import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Book } from '../../dist/books/interfaces/book.interface';
import { BooksService } from './books.service';
import { BookDTO } from './dto/create-book.dto';

@Controller('books') // This is the url that is goin to be called. Like localhost:3000/books
export class BooksController {
  constructor(private _booksService: BooksService) {}

  // Example //
  // @Get() // This is the method
  // getBooks(): string {
  //   // This is the function that will be executed
  //   return 'Aquí se listarán todos los libros';
  // }

  // Real //
  @Get()
  getBooks(): Book[] {
    return this._booksService.getBooks();
  }

  // Example //
  // @Get(':id') // To use params
  // getBookById(@Param() params): string {
  //   // To inject params
  //   // console.log({ params }); // Output: { params: { id: '1' } }
  //   return `The Book with id: ${params.id}`;
  // }

  // Real //
  @Get(':id')
  getBookById(@Param() params): Book {
    return this._booksService.getBook(parseInt(params.id));
  }

  // Example //
  // @Post() // The variables are passed in the body, not by params
  // createBook(@Body() book: BookDTO): string {
  //   return `Book created: ${JSON.stringify(book)}`; // Output: Book created: {"name":"ABC","pages":"1","author":"Frank"} <= body.
  // }

  // Real //
  @Post()
  createBook(@Body() book: BookDTO): void {
    // This is how a real endpoint should work...
    return this._booksService.createBook(book);
  }

  // Example //
  // @Put(':id') // In put we use params
  // editBook(@Param('id') id: number, @Body() updateBook: BookDTO): string {
  //   // @Param('id') this way we can desestructure params.
  //   // URL example: localhost:3000/books/1
  //   return `The book with id: ${id} has been updated`;
  // }

  // Real //
  @Put(':id')
  editBook(@Param('id') id: string, @Body() updateBook: BookDTO): Book {
    return this._booksService.editBook(parseInt(id), updateBook);
  }

  // Example //
  // @Delete(':id')
  // deleteBook(@Param('id') id: number): string {
  //   return `The book with id: ${id} has been deleted`;
  // }

  // Real //
  @Delete(':id')
  deleteBook(@Param('id') id: string): void {
    return this._booksService.deleteBook(parseInt(id));
  }
}

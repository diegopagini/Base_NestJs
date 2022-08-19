import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books') // This is the url that is goin to be called. Like localhost:3000/books
export class BooksController {
  @Get() // This is the method
  getBooks(): string {
    // This is the function that will be executed
    return 'Aquí se listarán todos los libros';
  }

  @Get(':id') // To use params
  getBookById(@Param() params): string {
    // To inject params
    // console.log({ params }); // Output: { params: { id: '1' } }
    return `The Book with id: ${params.id}`;
  }

  @Post() // The variables are passed in the body, not by params
  createBook(@Body() book: CreateBookDTO): string {
    return `Book created: ${JSON.stringify(book)}`; // Output: Book created: {"name":"ABC","pages":"1","author":"Frank"} <= body.
  }

  @Put(':id') // In put we use params
  editBook(@Param('id') id: number, @Body() updateBook: CreateBookDTO): string {
    // @Param('id') this way we can desestructure params.
    // URL example: localhost:3000/books/1
    return `The book with id: ${id} has been updated`;
  }

  @Delete(':id')
  deleteBook(@Param('id') id: number): string {
    return `The book with id: ${id} has been deleted`;
  }
}

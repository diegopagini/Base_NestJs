import { Controller, Get, Param } from '@nestjs/common';

@Controller('books') // This is the url that is goin to be called. Like localhost:3000/books
export class BooksController {
  @Get() // This is the method
  getBooks() {
    // This is the function that will be executed
    return 'Aquí se listarán todos los libros';
  }

  @Get(':id') // To use params
  getBookById(@Param() params) {
    // To inject params
    // console.log({ params }); // Output: { params: { id: '1' } }
    return `The Book with id: ${params.id}`;
  }
}

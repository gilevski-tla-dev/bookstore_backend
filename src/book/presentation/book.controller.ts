import { Controller, Get, Param } from '@nestjs/common';
import { BookService } from '../data/book.service';

@Controller()
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('books')
  async getAllUsers() {
    const books = await this.bookService.findAll();
    return books;
  }

  @Get('books/:id')
  async getBook(@Param('id') id: string) {
    const book = await this.bookService.findOne(id);
    return book;
  }
}

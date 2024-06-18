import { Controller, Get, Param, Query } from '@nestjs/common';
import { BookService } from '../data/book.service';

@Controller()
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('books')
  async getAllBooks(
    @Query('id') id: string,
    @Query('author') author: string,
    @Query('from') from: number,
    @Query('to') to: number,
    @Query('search') search: string,
  ) {
    const books = await this.bookService.findAll(id, author, from, to, search);
    return books;
  }

  @Get('books/:id')
  async getBook(@Param('id') id: string) {
    const book = await this.bookService.findOne(id);
    return book;
  }
}

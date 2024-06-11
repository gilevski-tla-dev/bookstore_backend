import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get('get-all-books')
  async getAllUsers() {
    const books = await this.bookService.findAll();
    return books;
  }
}

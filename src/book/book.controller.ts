import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get()
  getBook() {
    return this.bookService.getBooks();
  }
}

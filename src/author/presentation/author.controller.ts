import { Controller, Get } from '@nestjs/common';
import { AuthorService } from '../data/author.service';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get('get-all-authors')
  async getAllAuthors() {
    const authors = await this.authorService.findAll();
    return authors;
  }
}

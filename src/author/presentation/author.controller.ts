import { Controller, Get } from '@nestjs/common';
import { AuthorService } from '../data/author.service';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  async getAllAuthors() {
    const authors = await this.authorService.findAll();
    return authors;
  }
}

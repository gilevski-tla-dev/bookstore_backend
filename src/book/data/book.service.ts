import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/book/domain/Book';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepository.find({ relations: ['author'] });
  }

  findOne(id: string): Promise<Book> {
    return this.booksRepository.findOneOrFail({
      where: { id },
      relations: ['author'],
    });
  }
}

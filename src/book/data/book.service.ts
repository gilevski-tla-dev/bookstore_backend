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

  async findAll(
    id?: string,
    author?: string,
    from?: number,
    to?: number,
    search?: string,
  ): Promise<Book[]> {
    const query = this.booksRepository.createQueryBuilder('book');

    query.leftJoinAndSelect('book.author', 'author');

    if (id) {
      query.andWhere('book.id = :id', { id });
    }

    if (author) {
      query.andWhere('author.name = :author', { author });
    }

    if (from && to) {
      query.andWhere('book.price BETWEEN :from AND :to', { from, to });
    }

    if (search) {
      query.andWhere('book.title LIKE :search', { search: `%${search}%` });
    }

    return query.getMany();
  }

  findOne(id: string): Promise<Book> {
    return this.booksRepository.findOneOrFail({
      where: { id },
      relations: ['author'],
    });
  }
}

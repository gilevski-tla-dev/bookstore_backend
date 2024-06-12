import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../domain/Author';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}
  findAll(): Promise<Author[]> {
    return this.authorsRepository.find();
  }
}

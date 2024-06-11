import { Module } from '@nestjs/common';
import { BookController } from './presentation/book.controller';
import { BookService } from './data/book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/book/domain/Book';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}

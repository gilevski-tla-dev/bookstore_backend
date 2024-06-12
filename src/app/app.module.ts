import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/user/user.module';
import { BookModule } from 'src/book/book.module';
import { User } from 'src/user/domain/User';
import { Book } from 'src/book/domain/Book';
import { AuthorModule } from 'src/author/author.module';
import { Author } from 'src/author/domain/Author';

@Module({
  imports: [
    UserModule,
    BookModule,
    AuthorModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'book_store',
      entities: [User, Book, Author],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

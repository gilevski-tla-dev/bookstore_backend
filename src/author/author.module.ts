import { Module } from '@nestjs/common';
import { AuthorController } from './presentation/author.controller';
import { AuthorService } from './data/author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './domain/Author';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}

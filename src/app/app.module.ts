import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/user/user.module';
import { BookModule } from 'src/book/book.module';

@Module({
  imports: [UserModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

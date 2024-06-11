// user.controller.ts
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get-all-users')
  async getAllUsers() {
    const users = await this.userService.findAll();
    return users;
  }
}

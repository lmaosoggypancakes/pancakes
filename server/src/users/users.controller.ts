import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService,
    ) {}
    @Post()
    async createUser(@Body() user: CreateUserDto) {
        return await this.userService.create(user);
    }
    @Get()
    async findAll() {
        return await this.userService.findAll({});
    }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    //Injecting usersService into controller
    constructor(private readonly usersService: UsersService){}

    //this decorator handles http post requests to /users
    @Post()
    async createUser(@Body() createUserDTO: createUserDTO) {
        //call the createUser method in usersService and returns the result
        return this.usersService.createUser(createUserDTO);
    }

    @Get()
    async findAll() {
        return this.usersService.findAll();
    }
}

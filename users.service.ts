import { Injectable } from '@nestjs/common';
import { createUserDTO } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
    //local database
    //an array to store user object
    private users = [];
    //Method to create a new user
    createUser(createUserDTO: createUserDTO) {
        //create a new user object including a generated id, time of creation and properties
        //of createUserDto
        const user = {
            id: uuidv4(),
            createdAt: new Date().toUTCString(), 
            ...createUserDTO,
        };
        this.users.push(user); //adding the new user to the users array
        return user;
    }
    //Method to get all users in the local database
    findAll() {
        return this.users;
    }


}

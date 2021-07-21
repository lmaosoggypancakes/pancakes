import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password: string;
    @IsEmail()
    email: string;
    
    createdAt = new Date();

    id: number;
}
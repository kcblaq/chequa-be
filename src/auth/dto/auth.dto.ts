import {IsNotEmpty, IsString, IsEmail} from 'class-validator'
export class AuthDto {
    @IsString()
        @IsEmail()
        @IsNotEmpty()
    email: string;

    @IsString()
        @IsNotEmpty()
    password: string;
}

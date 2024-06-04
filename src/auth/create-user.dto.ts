import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength, isNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  username : string;

  @IsString()
  @MinLength(8)
  @MaxLength(60)
  password: string;

}

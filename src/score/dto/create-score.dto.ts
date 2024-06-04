import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateScoreDto {
    @IsNotEmpty()
    score: number;
    
    @IsNotEmpty()
    user_id: number;
}

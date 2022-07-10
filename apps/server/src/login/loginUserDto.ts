import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class LoginUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(5, 20)
  pass: string;
}
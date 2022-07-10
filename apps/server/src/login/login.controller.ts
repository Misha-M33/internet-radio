import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginUserDto } from './loginUserDto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  loginUser(@Body() loginUserDto: LoginUserDto): string {
    return this.loginService.login(loginUserDto);
  }
}

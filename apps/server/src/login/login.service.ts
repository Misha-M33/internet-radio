import { Injectable } from '@nestjs/common';

interface ILoginData {
  email: string;
  pass: string;
}

@Injectable()
export class LoginService {
  login({ email, pass }: ILoginData) {
    return JSON.stringify({
      email,
      pass
    })
  }
}

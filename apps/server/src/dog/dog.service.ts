import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {

  sayWoff() {
    return JSON.stringify({message: 'Woff'})
  }
}

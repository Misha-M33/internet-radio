import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [UserModule, DogModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}

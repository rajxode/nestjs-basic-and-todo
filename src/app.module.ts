import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from './users.controller';

@Module({
  controllers: [AppController,UsersController],
})

export class AppModule {}

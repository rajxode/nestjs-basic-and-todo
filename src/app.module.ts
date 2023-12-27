import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from './users.controller';
import { PostsController } from './posts.controller';
import { TodoController } from './todo.controller';

@Module({
  controllers: [AppController,UsersController,PostsController,TodoController],
})

export class AppModule {}

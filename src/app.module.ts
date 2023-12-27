import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './users/user.module';
import { TodoModule } from './todos/todo.module';
import { PostModule } from './posts/post.module';

@Module({
  imports:[UserModule,TodoModule,PostModule],
  controllers: [AppController],
  
})

export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './users/user.module';
import { TodoModule } from './todos/todo.module';
import { PostModule } from './posts/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal:true
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    TodoModule,
    PostModule],
  controllers: [AppController],
})

export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from './users.controller';
import { PostsController } from './posts.controller';
import { TodoController } from './todo.controller';
import { UserStore } from './user.store';

const isAdmin = true;

@Module({
  controllers: [AppController,UsersController,PostsController,TodoController],
  // defining injectable dependenies 
  providers:[
            // Standard provider( class based )
            {provide:UserStore, useClass:UserStore},
            // Value Provider (primitive type values)
            { provide:'DB_Name', useValue:'MongoDB'},
            // factory provider , dynamic values 
            { provide:'Event_Store', useFactory:() => {
              isAdmin
              ?
              console.log('Admin')
              :
              console.log('user')
            }}
  ]
  // shorthand property
  // providers:[UserStore]
})

export class AppModule {}

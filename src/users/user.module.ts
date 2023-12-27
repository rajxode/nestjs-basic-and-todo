import { Global, Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UserStore } from "./user.store";

const isAdmin = true;

// the following module is global, which means any outer module can directly import it's services
@Global()
@Module({
    controllers:[UsersController],
    // defining injectable dependenies 
    providers:[
        // standard Provider
        { provide:UserStore , useClass: UserStore},
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
    ],
    // outer module can use this service
    exports:[UserStore]
})
export class UserModule {}
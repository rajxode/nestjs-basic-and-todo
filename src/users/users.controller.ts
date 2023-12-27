import { Controller, Get , HttpCode, Req, HttpStatus, Post, Res, Inject } from "@nestjs/common";
import { Request, Response } from 'express';
import { UserStore } from "./user.store";

// controller for 'users' routes
@Controller('/users')
export class UsersController{

    // using 'UserStore' dependency
    constructor(
                // class depend. 
                private store:UserStore, 
                // primitive depend.
                @Inject('DB_Name') private dbName:string,
                // factory depend.
                @Inject('Event_Store') private fun){
        console.log(this.store , this.dbName);
    }

    // second method of using injectable dependencies
    // constructor(@Inject(UserStore) private store:UserStore){
    //     console.log(this.store)
    // }

    // get req ('/users/')
    @Get()
    // controller function, status code is set by default from nestjs
    greeting():string{
        // show greeting message
        return 'Hello User';
    }

    // get req '/users/mydetails' , return json data
    @Get('/myDetails')
    // override the default status code of the response
    @HttpCode(200)
    // controller function, Req( or Request) is imported from nestjs
    getDetails(@Req() req : Request){
        return {
            name:'My name',
            age:22
        }
    }


    @Get('/myaccount')
    // status code for (200) using enums
    @HttpCode(HttpStatus.OK)
    getAccount(){
        return {
            message:'My account details'
        }
    }

    // post req
    @Post('/adddata')
    // import Res( or Response ) from nestjs
    // if res imported then we have to return the response manually
    addData(@Req() req:Request , @Res() res:Response){
        // set status code within the controller function using response
        res.status(201);
        return res.json({
            message:'Add data'
        })
    }

    @Get('/profile')
    // use default return method after declaring the response
    getProfile(@Req() req:Request, @Res({passthrough:true}) res:Response){
        return {
            message:'profile route'
        }
    }

}
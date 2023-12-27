// an dummy injectable dependency

import { Injectable, Scope } from "@nestjs/common";

// interface for user's data
interface User{
    name:string,
    id:number,
    age:number
}

// making injectable dependency
@Injectable(
    // define scope of depend. DEFAULT/REQUEST/TRANSIENT
    // {
        // scope:Scope.DEFAULT
    // }
)
export class UserStore{
    private store = new Map <number,User>;


    getUser(id:number){
        return this.store.get(id);
    }
}
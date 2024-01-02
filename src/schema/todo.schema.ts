
// schema for todo

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// schema
@Schema({
    timestamps:true
})
export class Todo {
    // name of todo
    @Prop({required:true})
    name: string;

    // status of todos
    @Prop({
        enum:['Done','Pending'],
        default:'Pending'
    })
    status: string;
}

// create schema
export const TodoSchema = SchemaFactory.createForClass(Todo);

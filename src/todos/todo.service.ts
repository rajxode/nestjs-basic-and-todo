
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Todo } from "src/schema/todo.schema";

@Injectable()
export class TodoService{
    constructor(
        // define model to perform mongoose operation
        @InjectModel(Todo.name)
        private todoModel: mongoose.Model<Todo>
    ){}

    // find list of all the todos
    async findAll():Promise<Todo[]> {
        const todos = await this.todoModel.find();
        return todos;
    }

    // create a new todo
    async createTodo(todo:Todo){
        const newTodo = await this.todoModel.create(todo);
        return newTodo;
    }

    // get a todo by id
    async getTodoById(id:string){
        const todo = await this.todoModel.findById(id);
        return todo;
    }

    // update a todo by id
    async updateTodo(id:string, todo:Todo){
        const updatedTodo = await this.todoModel.findByIdAndUpdate(id,todo,{new:true});
        return updatedTodo;    
    }

    // delete a todo by id
    async deleteTodo(id:string){
        return await this.todoModel.findByIdAndDelete(id);
    }
}
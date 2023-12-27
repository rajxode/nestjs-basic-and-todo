
// all the required dependencies
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

// todo list and index of todos
let todo = [];
let id = 1;


// interface type for todo items
interface Todo{
    id:number,
    name:string,
    done:boolean
}


// todo controller 
@Controller('/todo')
export class TodoController{

    // get list of all the todos
    @Get()
    getTodo(){
        return {
            success:true,
            todo
        };
    }


    // add a new todo
    @Post()
    addTodo(@Body() requestBody:Todo){
        // data passed in req body
        requestBody.id = id;
        // increase index of todo
        id=id+1;
        // add todo
        todo.push(requestBody);
        // return response
        return{
            success:true,
            message:'New Todo added'
        }
    }


    // udpate a todo by id
    @Put('/:id')
    // get id by param and todo data in req body
    updateTodo(@Param('id') param, @Body() requestBody:Todo){
        // filter out the element with id equal to param
        const newTodo = todo.filter((item) => item.id !== Number(param));
        // update the element and append it to the new list
        requestBody.id = Number(param);
        newTodo.push(requestBody);
        // change the tood list
        todo = newTodo;
        // return response
        return {
            success:true,
            message:'Todo Updated'
        }
    }


    // delete a todo by id
    @Delete('/:id')
    deleteTodo(@Param('id') param){
        // filter out the todo
        const newTodo = todo.filter((item) => item.id !== Number(param));
        // update the list with new todo
        todo = newTodo;
        // return response
        return {
            success:true,
            message:'Todo Deleted'
        }
    }
}

// all the required dependencies
import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { Todo } from "src/schema/todo.schema";


// for local variables
// // todo list and index of todos
// let todo = [];
// let id = 1;

// interface type for todo items
interface TodoDto{
    name:string,
    status:string
}


// todo controller 
@Controller('/todo')
export class TodoController{

    constructor(private todoService: TodoService){}

    // ============ following code for CRUD operation on local variables ===========

    // // get list of all the todos
    // @Get()
    // getTodo(){
    //     return {
    //         success:true,
    //         todo
    //     };
    // }

    // // add a new todo
    // @Post()
    // addTodo(@Body() requestBody:Todo){
    //     // data passed in req body
    //     requestBody.id = id;
    //     // increase index of todo
    //     id=id+1;
    //     // add todo
    //     todo.push(requestBody);
    //     // return response
    //     return{
    //         success:true,
    //         message:'New Todo added'
    //     }
    // }

    // // udpate a todo by id
    // @Put('/:id')
    // // get id by param and todo data in req body
    // // ParseIntPipe to convert the string value in param,body,query into number
    // updateTodo(@Param('id', ParseIntPipe) param, @Body() requestBody:Todo){
    //     // exception / error handling in nestjs
    //     if(param < 0){
    //         throw new HttpException('Invalid Data',HttpStatus.BAD_REQUEST)
    //     }
    //     // filter out the element with id equal to param
    //     const newTodo = todo.filter((item) => item.id !== param);
    //     // update the element and append it to the new list
    //     requestBody.id = param;
    //     newTodo.push(requestBody);
    //     // change the tood list
    //     todo = newTodo;
    //     // return response
    //     return {
    //         success:true,
    //         message:'Todo Updated'
    //     }
    // }

    // // delete a todo by id
    // @Delete('/:id')
    // // defining the return error status code for wrong input data
    // deleteTodo(@Param('id' ,new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) param:number){
    //     // bad request exception
    //     if(param < 0){
    //         throw new BadRequestException('Invalid Data');
    //     }
    //     // filter out the todo
    //     const newTodo = todo.filter((item) => item.id !== param);
    //     // update the list with new todo
    //     todo = newTodo;
    //     // return response
    //     return {
    //         success:true,
    //         message:'Todo Deleted'
    //     }
    // }


    // ========== for CRUD operation using MONGODB ============ 
    // get list of all the todos in db
    @Get()
    gettodos():Promise<Todo[]>{
        return this.todoService.findAll();
    }

    // add a new todo in db
    @Post()
    async createTodo(@Body() todo:TodoDto):Promise<Todo>{
        return this.todoService.createTodo(todo);
    }
    
    // get a single todo by id from db
    @Get('/:id')
    async getTodoById(@Param('id') id:string):Promise<Todo>{
        return this.todoService.getTodoById(id);
    }

    // update a todo by id 
    @Put('/:id')
    async updateTodo(@Param('id') id:string, @Body() todo:Todo):Promise<Todo>{
        return this.todoService.updateTodo(id,todo);
    }

    // delete a todo by id
    @Delete('/:id')
    async deleteTodo(@Param('id') id:string){
        this.todoService.deleteTodo(id);
        return {
            message:'Todo deleted'
        };
    }
}
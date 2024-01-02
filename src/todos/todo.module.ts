import { Module } from "@nestjs/common";
import { TodoController } from "./todo.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { TodoSchema } from "src/schema/todo.schema";
import { TodoService } from "./todo.service";

@Module({
    imports:[MongooseModule.forFeature([{ name:'Todo',schema:TodoSchema}])],
    controllers:[TodoController],
    providers:[TodoService]
})
export class TodoModule {}
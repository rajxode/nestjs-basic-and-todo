
import { Body, Controller, Get, Headers, Param, Post, Query } from "@nestjs/common";


// an interface for request body data
interface dataDTO{
    name:string,
    age:number
};

@Controller('/posts')
export class PostsController{

    @Get()
    getPosts(){
        return {
            message:'A dummy Post Controller'
        }
    }

    // ================================= Request Params ========================
    @Get('/singleparam/:id')
    // to get list of params send in req
    getPostById(@Param() params:Record<string,any>){
        // print params object
        console.log(params);
        return{
            message:'Route with Req params'
        }
    }
    
    // req with mulitple params
    @Get('/multiparam/:id/:name')
    // get multiple params with there values
    getMyParams(@Param() params:Record<string,any>){
        console.log(params);
        return {
            message:'Route with mulitple req params'
        }
    }

    @Get('/oneparam/:id')
    // to extract value of a single param from req
    getOneParam(@Param('id') param){
        console.log(param);
        return{
            message:'Extract the value of one single param from request'
        }
    }

    // =================================== Query params ==============================
    @Get('/queryparam')
    // show an object containing all the query params
    getQueryParam(@Query() query:Record<string,any>){
        console.log(query);
        return{
            message:'Route with req query params'
        }
    }

    @Get('/onequeryparam')
    // show an object containing all the query params
    getOneQueryParam(@Query('name') query:string){
        console.log(query);
        return{
            message:'Extract value of a single Query param'
        }
    }

    // ==================================== Request Headers ===========================
    @Get('/headers')
    // get list of all the request headers
    getHeaders(@Headers() headers:Record<string,any>){
        console.log(headers);
        return{
            message:'Route for headers'
        }
    }

    @Get('/singleheader')
    // to extract value of a single header from request headers
    getSingleHeader(@Headers('user-agent') header:string){
        console.log(header);
        return{
            message:'Extract value of a single request header'
        }
    }


    // =========================== Request Body ==================

    // read json and urlencoded data only
    @Post('/adddata')
    // get all the data in req body
    addData(@Body() requestBody:dataDTO){
        console.log(requestBody);
        return{
            message:'Route for Request body'
        }
    }


}
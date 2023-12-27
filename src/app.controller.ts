import { Controller, Get } from '@nestjs/common';

// app controller
@Controller()
export class AppController {

  // get request
  @Get()
  // controller function
  getHello(): string {
    return 'Hello World';
  }
}

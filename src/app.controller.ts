import { Controller, Get } from '@nestjs/common';

// app controller
@Controller()
export class AppController {

  // get request
  @Get()
  getHello(): string {
    return 'Hello World';
  }
}

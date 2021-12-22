import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDetails} from './model/UserDetails.model'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("login/:userName/:password")

  login(@Param('userName') userName:string, @Param('password') password:string): UserDetails{

    try {
      
      let response = this.appService.getUserDetails(userName, password);

      return response;
    } catch (error) {
      return error;
    }
  }
}

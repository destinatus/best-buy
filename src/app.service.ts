import { Injectable } from '@nestjs/common';
import * as mockData from './data/userData.json';
import { UserDetails } from './model/UserDetails.model';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUserDetails(userName: string, password: string) {
    try {
      let isLoggedIn = this.login(userName, password);
      if (isLoggedIn) {
        let userDetail = this.getUser(userName);

        return userDetail;
      }else{
        throw {error: "Invalid user."}
      }
    } catch (error) {
      throw error;
    }
  }

  login(userName: string, password: string) {
    try {
      if (mockData[userName]) {
        let user = mockData[userName];
        if (user.password == password) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }

  getUser(userName) {
    try {
      let user = mockData[userName];

      let response = new UserDetails(user);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

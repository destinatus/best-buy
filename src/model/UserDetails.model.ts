export class UserDetails{
    firstName: String;
    lastName: String;
    email: String;

    constructor(payload){
        this.firstName = payload.fname;
        this.lastName = payload.lname;
        this.email = payload.email;

    }
}
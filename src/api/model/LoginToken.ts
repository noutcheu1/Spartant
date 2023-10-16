export class LoginToken {
    private token:string
    private username: string
    private email: string;
    constructor(email:string, token:string, username:string) {
        this.email =email;
        this.token = token;
        this.username = username;
      }
}


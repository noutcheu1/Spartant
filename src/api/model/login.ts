export class Login {

  private email: string;
  private password: string;
  constructor(email:string,
  password:string) {
    this.email = email
    this.password = password
  }
  public set_email(email:string): void{
    this.email = email
  }
  public get_email(): string{
    return this.email
  }
  public get_password(): string{
    return this.email
  }

  public set_password(new_pass:string): void{
    this.password = new_pass
  }
  public tojson(){
    return {
      "email": this.email,
      "password": this.password
    }
  }
}

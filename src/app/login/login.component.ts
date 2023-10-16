import {Component, OnInit} from '@angular/core';
import {AdminService} from "src/api/admin.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Login} from "src/api/model/login"
import {FormControl, FormBuilder,FormGroup, Validators} from "@angular/forms";
import {LoginToken} from "src/api/model/LoginToken";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit  {
  logindata: Login = new Login(
                        " ",
                        " ");
  user: LoginToken = new LoginToken(
                        " ",
                        " ",
                        " ")

  submitted: boolean  = false;
  loginForm : FormGroup =  new FormGroup({
      email : new FormControl(" " , Validators.required),
      password : new FormControl(" " , Validators.required),
  });
  message: any;

  constructor(private fb:FormBuilder,
              private auth : AdminService,
              private activatedRoute: ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
       this.createForm();
       this.activatedRoute.queryParams.subscribe(params => {
        this.message  = params['startdate'];
        console.log(this.message ); // Print the parameter to the console.
    });
  }

  LoginForm() {

       this.logindata.set_email(this.loginForm.value.email);
       this.logindata.set_password(this.loginForm.value.password);

      this.auth.login(this.logindata).subscribe(
      (response) =>{
        console.log(response.response.token);
        this.submitted =true;
        this.user = new LoginToken(response.response.email, response.response.token,  response.response.username)

        this.auth.seConnecter(this.user)
        window.location.reload()
      },
      (error) => {
        console.log(error);
        this.message = error.error.message
      }
    );

  }

   createForm(){
    this.loginForm = this.fb.group({
      email :['', Validators.required],
      password:['', Validators.required],
    });

  }

}

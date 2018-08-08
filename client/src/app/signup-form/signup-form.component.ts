import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  
  user : any = {}
  username: string = ''
  email: string = ''
  password: string = ''
  role:any;
  auth: any = {
    
    role:'',
    username: '',
    email: '',
    password: '',
    image:''
  } //object used for all authentication
 

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  signup(){
   

    // this.auth.image = this.image.nativeElement.files[0];

  // this.auth.image = this.image.nativeElement.files[0];
    this.auth.username = this.username;

    this.auth.email = this.email;
    this.auth.password = this.password;
    this.auth.role = this.role;
    
    this.authService.signup(this.auth)
    .subscribe( user => this.user = user)
    console.log(this.user)
    this.username = '';
    this.email = '';
    this.password = '';
    this.router.navigate(['login'])
  }
  ngOnInit() {
  }

}

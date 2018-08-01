import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  
  username: string = ''
  email: string = ''
  password: string = ''
  role:any;
  auth: any = {
    role:'',
    username: '',
    email: '',
    password: ''
  } //object used for all authentication
  user = ''

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  signup(){
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
  }
  ngOnInit() {
  }

}

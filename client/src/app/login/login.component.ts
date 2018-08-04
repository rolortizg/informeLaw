import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  // username: string = ''
  isLogged = false
  email: string = ''
  password: string = ''
  auth: any = {
    email: '',
    password: ''
  } //object used for all authentication
  user = ''

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  signup(){
    this.authService.signup(this.auth)
    .subscribe(user=>{
      this.user = user
      // localStorage.setItem('user', JSON.stringify(user))
    })
  }

  login(){
    
    this.auth.email = this.email;
    this.auth.password = this.password;
    this.authService.login(this.auth)
    .subscribe( user => {
      this.user = user
      console.log(this.user)
      localStorage.setItem('user', JSON.stringify(this.user))
      this.isLogged = true
      this.router.navigate(['profile'])
    })
    

    // this.email = '';
    // this.password = '';
  }

  logout(){
    localStorage.removeItem('user')
    
  }
  

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['profile'])
    }
   
   }
}


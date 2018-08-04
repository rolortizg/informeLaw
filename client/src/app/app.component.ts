import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user:any
  title = 'app';
  
  constructor(

    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  logout(){
    localStorage.removeItem('user')
  }

  home(){
    this.router.navigate(['home'])
  }

  ngOnInit(){
    this.user = JSON.parse(localStorage.getItem('user'));
    if(!this.user)this.router.navigate(['login'])
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user: any;
    id:any;
    auth: any = {
      username: '',
      email: '',
      password: ''
    }

  constructor(
    private router: Router,
    private authService: AuthService,
    private activeRoute: ActivatedRoute
    ) { }


 



  ngOnInit() {
   this.user = JSON.parse(localStorage.getItem('user'))
    
    // this.authService.getProfile().toPromise()
    // .then(user=>{
    //   this.user = user
    //   console.log(this.user)
    // })

  }

}

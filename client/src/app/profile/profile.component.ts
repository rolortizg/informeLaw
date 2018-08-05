import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgbdModalOptions } from '../modal-options';
import { QuestionsService } from '../services/questions.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    questions:Array<any>;
    user: any;
    isLogged:true;
    id:any;
    auth: any = {
      username: '',
      email: '',
      password: ''
    }

  constructor(
    private router: Router,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private qService:QuestionsService
    ) { }


 



  ngOnInit() {
   this.user = JSON.parse(localStorage.getItem('user'))
   if(!this.user)this.router.navigate(['login'])

   this.qService.getQuestions()
   .subscribe(questions => this.questions = questions)
   

 
    
    // this.authService.getProfile().toPromise()
    // .then(user=>{
    //   this.user = user
    //   console.log(this.user)
    // })

  }

}

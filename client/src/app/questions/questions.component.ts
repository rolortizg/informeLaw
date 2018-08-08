import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { QuestionsService } from '../services/questions.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { LawyerService } from '../services/lawyer.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  user: any;
  id:any
  question = {};

  lawyer: any = {};
  isLogged = false
  username: string = ''
  title: string = ''
  content:string = ''
  category:string = ''
  answer:string = ''


  constructor(
    private qService: QuestionsService,
    private router: Router,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private lService: LawyerService
  ) { }

  makeQuestion(){
   
    // this.q.category = this.category;
    return this.qService.ask(this.question)
    .subscribe( question => {
      this.question = question
    })
    // this.username = '';
    // this.title = '';
    // this.content = '';
  }
  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      console.log(params.id)
      this.id = params.id
      
      this.lService.getOneLawyer(this.id)
      .subscribe(lawyer=>{
  //      console.log(phone)
        this.lawyer = lawyer
        
  
      })
    })

    this.user = JSON.parse(localStorage.getItem('user'))
    if(!this.user)this.router.navigate(['login'])
    this.question['username'] = this.user.username  
    this.question['lawyer'] = this.lawyer.username
   

  }

}

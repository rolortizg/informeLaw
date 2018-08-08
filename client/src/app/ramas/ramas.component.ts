import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { QuestionsService } from '../services/questions.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ramas',
  templateUrl: './ramas.component.html',
  styleUrls: ['./ramas.component.css']
})
export class RamasComponent implements OnInit {
  id:any;
  user: any;
  questions : Array<any>;
  isLogged = false
  username: string = ''
  title: string = ''
  content:string = ''
  category:string = ''
  search:any = ''

  constructor(
    private qService: QuestionsService,
    private router: Router,
    private authService: AuthService,
    private activeRoute: ActivatedRoute
  ) { }
  // getAllQuestions(){
  //   return this.qService.getQuestions()
  //   .subscribe(questions => this.questions = questions)
  //   // this.username = '';
  //   // this.title = '';
  //   // this.content = '';
  // }
  
  toDetail(){
    this.router.navigate(['edit'])
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(!this.user)this.router.navigate(['login'])

    this.qService.getQuestions()
    .subscribe(questions => this.questions = questions)
    

  }

}

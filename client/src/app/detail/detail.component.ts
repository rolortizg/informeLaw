import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { QuestionsService } from '../services/questions.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user:any
  question: any;
  id: any;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private questionService: QuestionsService
  ) {}

  // editOne(){
  //   this.questionService.editOneQuestion(this.id)
  //   .subscribe(question => this.question = question)
  // }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      console.log(params.id)
      this.id = params.id
      
      this.questionService.getOneQuestion(this.id)
      .subscribe(question=>{
  //      console.log(phone)
        this.question = question
      })
    })
    this.user = JSON.parse(localStorage.getItem('user'))
    if(!this.user)this.router.navigate(['login'])
//query
    this.activeRoute.queryParams
    .subscribe(query=>{
      console.log(query)
    })

  }

}

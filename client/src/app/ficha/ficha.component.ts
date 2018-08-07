import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { QuestionsService } from '../services/questions.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { LawyerService} from '../services/lawyer.service'

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  user:any
  lawyer: any;
  id: any;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private questionService: QuestionsService,
    private lService: LawyerService
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
      
      this.lService.getOneLawyer(this.id)
      .subscribe(lawyer=>{
  //      console.log(phone)
        this.lawyer = lawyer
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

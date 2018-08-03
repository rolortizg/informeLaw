import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {QuestionsService} from '../services/questions.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:any
  question: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private questionService : QuestionsService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.parent.snapshot.params.id
    this.questionService.getOneQuestion(this.id)
    .subscribe(question=>{
      this.question = question
    })
  }

  editOne(){
    if(!window.confirm('Estas seguro?')) return
    this.questionService.editOneQuestion(this.question)
    .subscribe(()=>{
     this.router.navigate(['ramas'])
    })
    
  }

  removeOne(id){
    this.questionService.deleteQuestion(id)
    .subscribe(()=>{
      this.router.navigate(['ramas'])
    })
  }

}
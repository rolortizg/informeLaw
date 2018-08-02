import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { QuestionsService } from '../services/questions.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  isLogged = false
  email: string = ''
  password: string = ''
  q: any = {
    username: '',
    title: '',
    content: '',
  } //object used for all authentication
  user = ''

  constructor(
    private qService: QuestionsService,
    private router: Router
  ) { }

  makeQuestion(){
    this.qService.ask(this.q)
    .subscribe(question=>{
      this.q = question
      // localStorage.setItem('user', JSON.stringify(user))
    })
  }
  ngOnInit() {
  }

}

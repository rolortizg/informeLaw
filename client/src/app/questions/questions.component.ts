import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { QuestionsService } from '../services/questions.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  user: any;
  isLogged = false
  username: string = ''
  title: string = ''
  content:string = ''
  q: any = {
    username: '',
    title: '',
    content: ''
  } //object used for all authentication

  constructor(
    private qService: QuestionsService,
    private router: Router,
    private authService: AuthService,
    private activeRoute: ActivatedRoute
  ) { }

  makeQuestion(){
    this.qService.ask(this.q)
    .subscribe(question=>{
      this.q = question
      // localStorage.setItem('user', JSON.stringify(user))
    })
  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))

  }

}

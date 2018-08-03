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
  question = {};
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
    private activeRoute: ActivatedRoute
  ) { }

  makeQuestion(){
   
    // this.q.category = this.category;
    return this.qService.ask(this.question)
    .subscribe( question => this.question = question)
    // this.username = '';
    // this.title = '';
    // this.content = '';
  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))

  }

}

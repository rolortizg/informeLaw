import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { LawyerService } from '../services/lawyer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrls: ['./lawyer.component.css']
})
export class LawyerComponent implements OnInit {

  user: any;
  lawyer = {};
  isLogged = false
  name: string = ''
  education: string = ''
  content:string = ''
  category:string = ''


  constructor(
    private lawyerService: LawyerService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  makeLawyer(){
   
    // this.q.category = this.category;
    return this.lawyerService.postLawyer(this.lawyer)
    .subscribe( lawyer => this.lawyer = lawyer)
    // this.username = '';
    // this.title = '';
    // this.content = '';
  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    if(!this.user)this.router.navigate(['login'])


  }
}

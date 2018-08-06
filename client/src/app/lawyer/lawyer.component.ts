import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router'
import { LawyerService } from '../services/lawyer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrls: ['./lawyer.component.css']
})
export class LawyerComponent implements OnInit, AfterViewInit {

  @ViewChild("image") image: ElementRef; 

  user: any;
  lawyer:any = {};
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

  ngAfterViewInit(){

  }

  makeLawyer(){

    this.lawyer.image = this.image.nativeElement.files[0]; 


    console.log(this.lawyer)
   
    // this.q.category = this.category;
    return this.lawyerService.postLawyer(this.lawyer)
    .subscribe( lawyer => this.lawyer = lawyer)
    this.router.navigate(['browse'])
    // this.username = '';
    // this.title = '';
    // this.content = '';
  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    if(!this.user)this.router.navigate(['login'])


  }
}

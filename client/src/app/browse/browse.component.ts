import { Component, OnInit } from '@angular/core';
import { LawyerService } from '../services/lawyer.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { DomSanitizer } from '@angular/core'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  lawyers:Array<any>;
  user:any;
  image:any;
  search:any = ''
  constructor(
    private lawyerService: LawyerService,
    private activeRoute: ActivatedRoute,
    private router: Router,

  ) { }


  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(!this.user)this.router.navigate(['login'])

    this.lawyerService.getLawyers()
    .subscribe(lawyers => this.lawyers = lawyers)
    

  }

}

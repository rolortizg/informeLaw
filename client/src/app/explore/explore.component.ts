import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgbdModalOptions } from '../modal-options';
import { LawyerService } from '../services/lawyer.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  user: any;
  lawyers:Array<any>
  isLogged:true;
  id:any;
  auth: any = {
    username: '',
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private lService: LawyerService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    if(!this.user)this.router.navigate(['home'])

    this.lService.getLawyers()
    .subscribe(lawyers => this.lawyers = lawyers)
  }

}

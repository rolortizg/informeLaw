import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown-basic.html'
})
export class NgbdDropdownBasic implements OnInit {
  user:any
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    

  }

}
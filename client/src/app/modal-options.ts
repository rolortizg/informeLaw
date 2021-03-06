import {Component, ViewEncapsulation, OnInit } from '@angular/core';
import { QuestionsService } from './services/questions.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-options',
  templateUrl: './modal-options.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class NgbdModalOptions implements OnInit{
  user: any;
  question = {};
  isLogged = false
  username: string = ''
  title: string = ''
  content:string = ''
  category:string = ''
  answer:string = 'nada'
  closeResult: string;

  constructor(private modalService: NgbModal,private qService: QuestionsService) {}



  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.question['username'] = this.user.username  
    // this.question['username'] = this.user.username   
 
   }

  makeQuestion(){
   
    
    return this.qService.ask(this.question)
    .subscribe( question => this.question = question)
    

    // this.username = '';
    // this.title = '';
    // this.content = '';
  }

  
}

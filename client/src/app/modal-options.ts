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
  isLogged = false
  username: string = ''
  title: string = ''
  content:string = ''
  q: any = {
    username: '',
    title: '',
    content: ''
  }
  closeResult: string;

  constructor(private modalService: NgbModal,private qService: QuestionsService) {}



  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true });
  }

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

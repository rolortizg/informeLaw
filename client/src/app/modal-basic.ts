
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { QuestionsService } from './services/questions.service'

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html'
})
export class NgbdModalBasic {
  closeResult: string;
  user:any
  id:any
  question: any
  counter:0
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private questionService : QuestionsService 
  ) { }


  ngOnInit() {

    this.id = this.activatedRoute.parent.snapshot.params.id
    this.questionService.getOneQuestion(this.id)
    .subscribe(question=>{
      this.question = question
    })
    this.user = JSON.parse(localStorage.getItem('user'))
    if(!this.user)this.router.navigate(['login'])
  }

  editOne(){
    if(!window.confirm('Estas seguro?')) return
    this.questionService.editOneQuestion(this.question)
    .subscribe(()=>{
      this.counter = this.question
      console.log(this.counter)
     this.router.navigate(['/ramas', this.question._id])
    })
    
  }

  removeOne(id){
    this.questionService.deleteQuestion(id)
    .subscribe(()=>{
      this.router.navigate(['ramas'])
    })
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

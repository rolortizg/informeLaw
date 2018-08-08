import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  // url = "https://informe-law.herokuapp.com/preguntas/question/";
  url = "http://localhost:3000/preguntas/question/";
  id : any;
  user: any;
  constructor(
    private http: Http
  ) { }

  ask(q): Observable<any>{
    return this.http.post(this.url ,q)
    .pipe(map((res:Response)=>res.json()))
  }

  getQuestions(): Observable<any>{
    return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json()))
  }

  getOneQuestion(id){
    return this.http.get(this.url + id)
        .pipe(map((res: Response)=>res.json()));                                
  }
  
  editOneQuestion(obj){
    return this.http.put(this.url + obj._id, obj) 
        .pipe(map((res: Response)=>res.json()))    
  }    

  deleteQuestion(id){
    return this.http.delete(this.url + id)
            .pipe(map((res: Response)=>res.json()))                                                                

  }


}

import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  url = "http://localhost:3000/";
  id : any;
  constructor(
    private http: Http
  ) { }

  ask(q): Observable<string>{
    return this.http.post(this.url + 'question', q)
    .pipe(map(res=>res.json()))
  }

}

import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LawyerService {

  url = "http://localhost:3000/lawyer/";
  id : any;
  user: any;
  constructor(
    private http: Http
  ) { }

  postLawyer(q): Observable<any>{
    return this.http.post(this.url ,q)
    .pipe(map((res:Response)=>res.json()))
  }

  getLawyers(): Observable<any>{
    return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json()))
  }

  getOneLawyer(id){
    return this.http.get(this.url + id)
        .pipe(map((res: Response)=>res.json()));                                
  }
  
  editOneLawyer(obj){
    return this.http.put(this.url + obj._id, obj) 
        .pipe(map((res: Response)=>res.json()))    
  }    

  deleteLawyer(id){
    return this.http.delete(this.url + id)
            .pipe(map((res: Response)=>res.json()))                                                                

  }

}

import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // url = "https://informe-law.herokuapp.com/auth/";
  url = "http://localhost:3000/auth/";
  id : any;
  constructor(
    private http: Http
  ) { }

  RequestOptionsArgs:any = {
    withCredentials: true
  }

  signup(auth): Observable<any>{
  
    let formdata = new FormData();

    for (let key in auth){

      formdata.append(key, auth[key]);

    }

    return this.http.post(this.url + 'signup', auth)
    .pipe(map(res=>res.json()))
  }

  login(auth): Observable<string>{
    return this.http.post(this.url + 'login', auth)
    .pipe(map(res=>res.json()))
  }

  changePic(id ,img):Observable<any>{
    
    let formdata = new FormData();
    formdata.append("image", img)

    return this.http.put(this.url + 'profile/' + id, formdata) 
    .pipe(map((res: Response)=>res.json())) 
  }

  getProfile(){
    return this.http.get(this.url + 'profile')
    .pipe(map(res=>res.json()))
  }

//   getOneUser(id){
//     return this.http.get(this.url + 'profile' + id)
//         .pipe(map((res: Response)=>res.json()));                                
// }


  logout(){
    localStorage.removeItem('user')
    console.log('removed')
  }

}
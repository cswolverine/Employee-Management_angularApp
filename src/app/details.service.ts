import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, generate } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  readonly baseUrl = "http://localhost:3000/";
  constructor(private http:HttpClient) {}
  
  AddUpdateUser(User:any,type:any):Observable<any>{
    debugger
     if(type=="Add"){
      return this.http.post(this.baseUrl+"users",User);
     }
    else{
      return this.http.put(this.baseUrl+"users/"+User.id,User);
    }
  }
  getAllusers():Observable<any>{
    return this.http.get(this.baseUrl+"users");
  }
  deleteById(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"users/"+id);
  }
  getUserById(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"users/"+id);
  }
  
}


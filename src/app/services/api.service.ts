import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl='http://localhost:3000/employeepost'
  constructor(private http:HttpClient) { }

  OnPostCall(data:any){
    return this.http.post<any>(this.baseurl,data).pipe(map((res)=>{
      return res;
    }))
  }
  OnGetCall(){
    return this.http.get<any>(this.baseurl).pipe(map((res)=>{
      return res;
    }))
  }
  OnDeleteCall(id:number){
    return this.http.delete<any>(this.baseurl+'/'+id).pipe(map((res)=>{
      return res;
    }))
  }
  OnUpdateCall(id:any,data:any){
    return this.http.put<any>(this.baseurl+'/'+data,id).pipe(map((res)=>{
      return res;
    }))
  }
}

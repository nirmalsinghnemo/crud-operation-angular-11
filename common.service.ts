import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public _http: HttpClient) { }

  createUser(row: any){
    return this._http.post("http://localhost:3000/users",row);
  }
  getAllUser(){
    return this._http.get<any>("http://localhost:3000/users");
  }
  updateUser(row: any){
    return this._http.put("http://localhost:3000/users/" +row.id,row)
  }
  deleteUser(row: any){
    return this._http.delete("http://localhost:3000/users/" +row.id);
  }

}

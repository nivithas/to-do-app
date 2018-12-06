import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestAPIUsersServiceService {

  constructor(private http:HttpClient) { }

  getRemoteUsers(){
    return this.http.get("http://localhost:3001/users")
  }

  createUser(user){
    return this.http.post("http://localhost:3001/users", user)
  }
  removeUser(indexRec){
    return this.http.delete("http://localhost:3001/users/" + indexRec)
  }
  getOneUser(id){
    return this.http.get("http://localhost:3001/users/" + id)
  }
  getRemoteProducts(){
    return this.http.get("http://localhost:3000/products")
  }
}

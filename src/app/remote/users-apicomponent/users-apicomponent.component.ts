import { Router } from '@angular/router';
import { RestAPIUsersServiceService } from './../../services/rest-apiusers-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-apicomponent',
  templateUrl: './users-apicomponent.component.html',
  styleUrls: ['./users-apicomponent.component.css']
})
export class UsersAPIComponentComponent implements OnInit {
allUsers:any;
  constructor(private userService:RestAPIUsersServiceService,private router:Router) { }

  ngOnInit() {
    this.getAPIData()
  }

  getAPIData(){
    this.userService.getRemoteUsers().subscribe((data) => {
    console.log(data);
    this.allUsers = data
    console.log(this.allUsers)
    })
  }
  user = {
    "name":"YUII",
    "email": "yuvvo@gmail.com",
    "address": {
      "geo":{
        "lat": "11.11",
        "lng": "12.13"
      }
    }
  }

  postUser(){
    this.userService.createUser(this.user).subscribe((response)=>{
      console.log(this.user)
       this.userService.getRemoteUsers().subscribe((response) => {
         this.allUsers = response
       })
    })
  }
  deleteUser(ind){
    console.log(ind);
      this.userService.removeUser(ind).subscribe((response1)=>{
      console.log(response1)
      this.userService.getRemoteUsers().subscribe((response1) => {
         this.allUsers = response1
       })
    })
  }
  userDetail(id){
    //it ll navigate to /remoteData/id
    this.router.navigate(["/remoteData",id])
  }
}

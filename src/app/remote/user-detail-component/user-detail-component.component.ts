import { RestAPIUsersServiceService } from './../../services/rest-apiusers-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail-component',
  templateUrl: './user-detail-component.component.html',
  styleUrls: ['./user-detail-component.component.css']
})
export class UserDetailComponentComponent implements OnInit {

  activePath:any;
  selectedUser:any

  constructor(private active: ActivatedRoute,private userService: RestAPIUsersServiceService) { }

  ngOnInit() {
    this.activePath = this.active.snapshot.paramMap.get("id");
    console.log(this.activePath);
    this.getUser(this.activePath);
  }
  
  getUser(id){
    this.userService.getOneUser(id).subscribe((response)=>{
      this.selectedUser = response;
    })
  }
}

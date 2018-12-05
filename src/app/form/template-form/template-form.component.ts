import { RestAPIUsersServiceService } from './../../services/rest-apiusers-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private userService:RestAPIUsersServiceService) { }

  ngOnInit() {
  }
  // addFormUser(val){
  //   console.log(val);
  //   this.userService.createUser(val).subscribe((data)=>{
  //     console.log(data)
  //   })
  // }
}

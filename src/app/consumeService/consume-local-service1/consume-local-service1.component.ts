import { Component, OnInit } from '@angular/core';
import { LocalService1Service } from 'src/app/services/local-service1.service'

@Component({
  selector: 'app-consume-local-service1',
  templateUrl: './consume-local-service1.component.html',
  styleUrls: ['./consume-local-service1.component.css']
})
export class ConsumeLocalService1Component implements OnInit {
 constructor(private localService:LocalService1Service) { }
 myMessage = "";
  ngOnInit() {
      this.localService.firstService();
      this.myMessage = this.localService.returnMyMessage()
      this.localService.friends.push('zoom')
      console.log(this.localService.friends)
  }

}

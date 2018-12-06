import { RestAPIUsersServiceService } from './../../services/rest-apiusers-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 allProducts:any
  constructor(private userService:RestAPIUsersServiceService) { }

  ngOnInit() {
    this.getProductList()
  }
  getProductList(){
    this.userService.getRemoteProducts().subscribe((data)=>{
       console.log(data);
       this.allProducts = data;
    })
  }
}

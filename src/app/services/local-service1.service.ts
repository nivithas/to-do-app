import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService1Service {

  friends = ['ol','ko','po']
  returnMyMessage(){
    return "sdhfisdhfjk";
  }
 firstService(){
   console.log("am a service")
 }
  constructor() { }
}

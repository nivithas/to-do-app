import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  constructor() { }
  myTasks = ['Go get some lassi','Plan a weekend trip','Task 3','Task 4']
  completedTasks =[];
  ngOnInit() {
  }
  updateTask = function(){
    this.myTasks.push(this.oneTask);
    this.oneTask ="";
  }
  taskStatus(ct){
    this.completedTasks.push(this.myTasks[ct]);
    this.myTasks.splice(ct,1);
  }
}

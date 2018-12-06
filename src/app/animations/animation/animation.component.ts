import { Component, OnInit } from '@angular/core';
import { trigger,state,transition,animate,style } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger("growUpAnimation",[
      state("kid",style({"font-size":"30px","color":"red"})),
      state("elder",style({"font-size":"80px","color":"green","transform":"rotate(360deg)"})),
      transition('kid <=> elder',animate('800ms ease-in'))
    ])
  ]
})
export class AnimationComponent implements OnInit {
  defaultState:String ="kid";
  constructor() { }

  ngOnInit() {
  }
  animateNow(){
    this.defaultState = this.defaultState == "elder"?"kid":"elder"
  }
}

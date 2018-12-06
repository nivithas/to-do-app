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
  content:String = "i am a kid .i wish to grow up"
  constructor() { }

  ngOnInit() {
  }
  animateNow(){
    this.defaultState = this.defaultState == "elder"?"kid":"elder"
    if(this.defaultState == "kid")
    this.content = "i am a kid .i wish to grow up"
    else{
      this.content = "i grew up"
    }
  }
}

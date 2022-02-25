import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../types/message";
import * as moment from "moment";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  showItem:boolean=true
  @Input() message:Message={text:"",lifetime:moment().toDate()}
  private _ticker: any|undefined;

  constructor() { }

  ngOnInit():void{
    this._ticker=setInterval(()=>this.checkVisible(),1000)
  }
  checkVisible=()=>{
    if(moment().isAfter(this.message.lifetime)){
      clearInterval(this._ticker)
      this.showItem=false
    }
  }
}

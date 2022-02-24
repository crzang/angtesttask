import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../types/message";
import * as moment from "moment";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message:Message={text:"",lifetime:moment().toDate()}

  constructor() { }

  ngOnInit(): void {

  }

}

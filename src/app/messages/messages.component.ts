import {Component, OnInit, TrackByFunction} from '@angular/core';
import {MessageService} from "../message.service";
import {Message} from "../types/message";
import * as moment from 'moment'
import {Subscribable,Observable, Observer} from "rxjs";


@Component({
  selector: 'app-messages',
  templateUrl:'./messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [MessageService]
})
export class MessagesComponent implements OnInit {

  private _messages: Array<Message>=new Array<Message>();

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageService.getAllMessage().subscribe((m:any)=>{
      this._messages.push(m)
    })
  }

  getMessages = () => {
    return this._messages
  }

  onSendMessage(value: string,lifetime:string) {
    this.messageService.addMessage({text: value, lifetime: moment().add(lifetime,"seconds").toDate()})
  }
}

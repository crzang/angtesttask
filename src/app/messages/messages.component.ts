import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";
import {Message} from "../types/message";
import * as moment from 'moment'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers:[MessageService]
})
export class MessagesComponent implements OnInit {

  messages:Message[]=[{text:"",lifetime:moment().toDate()}]

  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
    this.messages=this.messageService.getAllMessage()
  }

  getVisiblityItem(lifetime: Date) {
    return moment().isBefore(lifetime)
  }
}

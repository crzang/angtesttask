import { Injectable } from '@angular/core';
import {Message} from "./types/message";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  allMessages:Message[]=[
    {text:"Test message 1",lifetime:moment().add(1,'minutes').toDate()},
    {text:"Test message 2",lifetime:moment().add(2,'minutes').toDate()},
    {text:"Test message 3",lifetime:moment().add(3,'minutes').toDate()},
    {text:"Test message 4",lifetime:moment().add(4,'minutes').toDate()}
  ]
  constructor() { }

  getAllMessage=()=>{
    return this.allMessages
  }

  addMessage=(message:Message)=>{
    this.allMessages.push(message)
  }
}

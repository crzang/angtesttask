import { Injectable } from '@angular/core';
import {Message} from "./types/message";
import * as moment from "moment";
import {Observable,Observer} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _observer: Observer<Message> | undefined;

  private _allMessages:Observable<Message[]>=Observable.create((observer:Observer<Message>)=>{
    observer.next({text:"Test message 1",lifetime:moment().add(15,'seconds').toDate()})
    observer.next({text:"Test message 2",lifetime:moment().add(20,'seconds').toDate()})
    observer.next({text:"Test message 3",lifetime:moment().add(30,'seconds').toDate()})
    observer.next({text:"Test message 4",lifetime:moment().add(40,'seconds').toDate()})
    this._observer=observer

  })
  constructor() {

  }

  getAllMessage=():Observable<Message[]>=>{
    return this._allMessages
  }

  addMessage=(message:Message)=>{
    this._observer && this._observer.next(message)
  }
}

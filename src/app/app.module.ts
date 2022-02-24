import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from "./message.service";
import { MessageComponent } from './messages/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

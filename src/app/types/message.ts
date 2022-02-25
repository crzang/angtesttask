import * as moment from "moment";

export class Message{
  text:string=""
  lifetime:Date=moment().toDate()
}

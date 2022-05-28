import { Component, OnInit } from '@angular/core';
import data from '../db.json';
interface Teams{
  name:string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  teams: Teams[] = data;

  constructor() { }

  ngOnInit(): void {
  }

}

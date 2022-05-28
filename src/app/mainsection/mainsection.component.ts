import { Component, OnInit } from '@angular/core';
import data from '../db.json';

interface Messagesent{
  messagesent:string[];

}
interface Messagerec{
  messagerec:string[];
}

@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.css']
})
export class MainsectionComponent implements OnInit {
  messagesent: Messagesent[] = data;
  messagerec: Messagerec[] = data;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { CLIENTLIST } from './client.json';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientList: Client[] =[];
  constructor() { }

  ngOnInit() {
    this.clientList = CLIENTLIST;
  }

}

import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from "./client.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientList: Client[] =[];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClientList().subscribe(
      client => this.clientList = client
    );
  }

}

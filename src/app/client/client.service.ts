import { Injectable } from '@angular/core';
import { CLIENT_LIST } from './client.json';
import { Client } from './client';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  // we make Client[] Observable so when it changes in the database
  // it will display the change in real time
  getClientList(): Observable<Client[]> {
    return of(CLIENT_LIST);
  }
}

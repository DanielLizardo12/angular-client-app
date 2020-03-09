import { Injectable } from '@angular/core';
import { CLIENT_LIST } from './client.json';
import { Client } from './client';
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlEndPoint: string = "http://localhost:8080/api/clients";

  constructor(private http: HttpClient) { }

  // we make Client[] Observable so when it changes in the database
  // it will display the change in real time
  getClientList(): Observable<Client[]> {
    //return of(CLIENT_LIST);
    return this.http.get<Client[]>(this.urlEndPoint);
  }
}

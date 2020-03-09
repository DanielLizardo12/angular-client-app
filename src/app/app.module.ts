import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveComponent } from './directive/directive.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from "./client/client.service";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  {path: '', redirectTo: '/client', pathMatch: 'full'},
  {path: 'directive', component: DirectiveComponent},
  {path: 'client', component: ClientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

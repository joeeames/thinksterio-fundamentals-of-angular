import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RentalListComponent } from './rental-list/rental-list.component';

import { ActorListComponent } from './actor-list/actor-list.component';
import { FlopListComponent } from './flop-list/flop-list.component';
import { FlopDetailsComponent } from './flop-details/flop-details.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FlopSuggestionComponent } from './flop-suggestion/flop-suggestion.component';
import { routingTable } from './routes';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, HttpClientModule,
    RouterModule.forRoot(routingTable),
     ],
  declarations: [ 
    AppComponent, 
    ActorListComponent,
    FlopListComponent,
    FlopDetailsComponent,
    RentalListComponent,
    LoginComponent,
    NotFoundComponent,
    FlopSuggestionComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

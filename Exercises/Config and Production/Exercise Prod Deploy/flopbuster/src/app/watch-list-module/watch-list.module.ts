import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { WatchListComponent } from './watch-list.component';

let routes = [
  { path: '', component: WatchListComponent },
]

@NgModule({
  imports:      [ 
    CommonModule,
    RouterModule.forChild(routes),
     ],
  declarations: [ 
    WatchListComponent, 
    
  ],
})
export class WatchListModule { }

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { WatchListService } from './watch-list.service';

@Component({
  selector: 'my-watch-list',
  templateUrl: './watch-list.component.html',
  styles: [  ]
})
export class WatchListComponent  {

  watchList$;

  constructor(private watchListService: WatchListService) {}

  ngOnInit() {
    this.getWatchList()
  }

  getWatchList() {
    this.watchList$ = this.watchListService.getWatchList()
    // .subscribe(watchList => {
    //   this.watchList = watchList
    // })
  }

}
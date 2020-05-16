import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../Movie'


@Component({
  selector: 'my-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: [ './movie-tile.component.css' ]
})
export class MovieTileComponent  {
  @Input() movie: Movie;
  @Output() rent = new EventEmitter();
  selected = false;

  ngOnInit() {
  }

  onRentClicked() {
    this.rent.emit();
  }

}
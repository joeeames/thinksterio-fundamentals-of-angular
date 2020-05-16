import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-rental-list',
  templateUrl: './rental-list.component.html',
  styles: [ 
    'h6 { color: red }',
    'i { cursor: pointer }'
  ]
})
export class RentalListComponent  {
  @Input() rentalList;
  @Output() delete = new EventEmitter();

  onDelete(flopId) {
    this.delete.emit(flopId);
  }

}

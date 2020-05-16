import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  constructor(private http: HttpClient) {

  }

  getWatchList() {
    return of([
      {
        "id": 0,
        "title": "Wing Commander",
        "onSale": false,
        "dateAdded": "2010-04-01T06:00:00.000Z",
        "price": 2.99
      },
      {
        "id": 1,
        "title": "Transformers: Revenge of the Fallen",
        "onSale": true,
        "dateAdded": "2013-01-27T06:00:00.000Z",
        "price": 1.99
      },
      {
        "id": 2,
        "title": "Twilight",
        "onSale": true,
        "dateAdded": "2011-10-08T06:00:00.000Z",
        "price": 0.99
      },
      {
        "id": 3,
        "title": "The Last Airbender",
        "onSale": false,
        "dateAdded": "2014-04-04T06:00:00.000Z",
        "price": 2.99
      },
      {
        "id": 4,
        "title": "Batman and Robin",
        "onSale": false,
        "dateAdded": "2013-06-05T06:00:00.000Z",
        "price": 2.99
      },
      {
        "id": 5,
        "title": "Catwoman",
        "onSale": false,
        "dateAdded": "2013-06-04T06:00:00.000Z",
        "price": 2.99
      }
    ])
  }

}
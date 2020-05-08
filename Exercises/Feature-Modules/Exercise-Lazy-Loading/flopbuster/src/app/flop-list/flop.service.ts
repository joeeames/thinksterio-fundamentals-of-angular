import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlopService {

  getRentalList() {
    return of({
      count:3,
      titles: "The Room, Cats, Catwoman"
    })
  }

  getFlop(id: number) {
    return this.getFlops()
    .pipe(
      map(flops => {
        return flops.filter(flop => flop.id === id)[0]
      })
    )
    
  }

  getFlops() {
    return of([
      {
        "id": 0,
        "title": "Battlefield Earth",
        "year": 2000,
        "stars": 2.5,
        "rating": "PG-13",
        "director": "Roger Christian",
        "cast": ["John Travolta", "Forest Whitaker", "Barry Pepper"],
        "imdblink": "https://www.imdb.com/title/tt0185183/",
        "image": "/images/battlefield-earth.jpg",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTg0Njk2OTM3OF5BMl5BanBnXkFtZTYwNTAyMzc3._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        "id": 1,
        "title": "Santa Clause Conquers the Martians",
        "year": 1964,
        "stars": 2.7,
        "rating": "Unrated",
        "director": "Nicholas Webster",
        "cast": ["John Call", "Leonard Hicks", "Vincent Beck"],
        "imdblink": "https://www.imdb.com/title/tt0058548/",
        "image": "/images/santa-clause-conquers-the-martians.jpg",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BZDllYzM0YjktYWNjOC00MjZjLWE2Y2EtOGRkMTY1N2I3MjUxXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {	
        "id": 2,
        "title": "The Room",
        "year": 2003,
        "stars": 3.7,
        "rating": "R",
        "director": "Tommy Wiseau",
        "cast": ["Tommy Wiseau", "Juliette Danielle", "Greg Sestero"],
        "imdblink": "https://www.imdb.com/title/tt0368226/",
        "image": "/images/the-room.jpg",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BYjEzN2FlYmYtNDkwMC00NGFkLWE5ODctYmE5NmYxNzE2MmRiXkEyXkFqcGdeQXVyMjMwODc5Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        "id": 3,
        "title": "Howard the Duck",
        "year": 1986,
        "stars": 4.7,
        "rating": "PG",
        "director": "Willard Huyck",
        "cast": ["Lea Thompson", "Jeffrey Jones", "Tim Robbins"],
        "imdblink": "https://www.imdb.com/title/tt0091225/",
        "image": "/images/howard-the-duck.jpg",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BZWQ5Y2FmMmItZjYzNC00Yzc5LWE0ZjYtMTI4YTA1ZGJkZjgyXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        "id": 4,
        "title": "Jack and Jill",
        "year": 2011,
        "stars": 3.3,
        "rating": "PG",
        "director": "Dennis Dugan",
        "cast": ["Adam Sandler", "Katie Holmes", "Al Pacino"],
        "imdblink": "https://www.imdb.com/title/tt0810913/",
        "image": "/images/jack-and-jill.jpg",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BNjczMTU5OTUyMl5BMl5BanBnXkFtZTcwODEzNjc3Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        "id": 5,
        "title": "Cats",
        "year": 2019,
        "stars": 2.7,
        "rating": "PG",
        "director": "Tom Hooper",
        "cast": ["James Corden", "Judi Dench", "Jason Derulo"],
        "imdblink": "https://www.imdb.com/title/tt5697572/",
        "image": "/images/cats.jpg",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BNjRlNTY3MTAtOTViMS00ZjE5LTkwZGItMGYwNGQwMjg2NTEwXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        "id": 6,
        "title": "Dudley Do-Right",
        "year": 1999,
        "stars": 3.9,
        "rating": "PG",
        "director": "Hugh Wilson",
        "cast": ["Brendan Fraser", "Sarah Jessica Parker", "Alfred Molina"],
        "imdblink": "https://www.imdb.com/title/tt0160236/",
        "image": "/images/dudley-do-right.jpg",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BN2EwZWRhNTQtOWJlMS00NDAwLTk2ZGUtNDg1NjUzZGMyMTYzXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        "id": 7,
        "title": "Batman and Robin",
        "year": 1997,
        "stars": 3.7,
        "rating": "PG-13",
        "director": "Joel Schumacher",
        "cast": ["Arnold Schwarzenegger", "George Clooney", "Chris O'Donnell"],
        "imdblink": "https://www.imdb.com/title/tt0118688/",
        "image": "/images/batman-and-robin.jpg",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        "id": 8,
        "title": "Catwoman",
        "year": 2004,
        "stars": 3.4,
        "rating": "PG-13",
        "director": "Pitof",
        "cast": ["Halle Berry", "Sharon Stone", "Benjamin Bratt"],
        "imdblink": "https://www.imdb.com/title/tt0327554/",
        "image": "/images/catwoman.jpg",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BMjA4MzM0NDAzOF5BMl5BanBnXkFtZTcwMDY3MDYyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        "id": 9,
        "title": "Last Airbender",
        "year": 2010,
        "stars": 4.1,
        "rating": "PG",
        "director": "M. Night Shyamalan",
        "cast": ["Noah Ringer", "Nicola Peltz", "Jackson Rathbone"],
        "imdblink": "https://www.imdb.com/title/tt0938283/",
        "image": "/images/last-airbender.jpg",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTM1NjE0NDA0MV5BMl5BanBnXkFtZTcwODE4NDg1Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        "id": 10,
        "title": "Spider-Man 3",
        "year": 2007,
        "stars": 6.2,
        "rating": "PG-13",
        "director": "Sam Raimi",
        "cast": ["Tobey Maguire", "Kirsten Dunst", "Topher Grace"],
        "imdblink": "https://www.imdb.com/title/tt0413300/",
        "image": "/images/spider-man-3.jpg",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        "id": 11,
        "title": "Transformers: Revenge of the Fallen",
        "year": 2009,
        "stars": 6.0,
        "rating": "PG-13",
        "director": "Michael Bay",
        "cast": ["Shia LaBeouf", "Megan Fox", "Josh Duhamel"],
        "imdblink": "https://www.imdb.com/title/tt1055369/",
        "image": "/images/transformers-revenge-of-the-fallen.jpg",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BNjk4OTczOTk0NF5BMl5BanBnXkFtZTcwNjQ0NzMzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        "id": 12,
        "title": "Twilight",
        "year": 2008,
        "stars": 5.2,
        "rating": "PG-13",
        "director": "Catherine Hardwicke",
        "cast": ["Kristen Stewart", "Robert Pattinson", "Billy Burke"],
        "imdblink": "https://www.imdb.com/title/tt1099212/",
        "image": "/images/twilight.jpg",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        "id": 13,
        "title": "Wing Commander",
        "year": 1999,
        "stars": 4.3,
        "rating": "PG-13",
        "director": "Chris Roberts",
        "cast": ["Freddie Prinze Jr.", "Matthew Lillard", "Saffron Burrows"],
        "imdblink": "https://www.imdb.com/title/tt0131646/",
        "image": "/images/wing-commander.jpg",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTc1MDI1MDMyN15BMl5BanBnXkFtZTcwMzgzMTIyMQ@@._V1_UY268_CR1,0,182,268_AL_.jpg"
      }
    ])
  }

}

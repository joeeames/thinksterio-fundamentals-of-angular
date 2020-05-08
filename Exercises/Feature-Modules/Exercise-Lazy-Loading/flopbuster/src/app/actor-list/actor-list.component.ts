import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActorListService } from './actor-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-actor-list-view',
  templateUrl: './actor-list.component.html',
  styles: [  ]
})
export class ActorListComponent  {
  actors
  
  constructor(private actorListService: ActorListService, private router: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.router.queryParams
    .subscribe(qps => {
      if(!!qps.sort) {
        this.actorListService.getActorList()
        .subscribe(actors => {
          this.actors = actors.sort((a, b) => 
            a.name < b.name ? -1 : 1
          )
        })
      } else {
        this.actorListService.getActorList()
        .subscribe(actors => {
          this.actors = actors;
        })
      }
    })

    
  }


}
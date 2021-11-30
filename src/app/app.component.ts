import { Component } from '@angular/core';
import { PagingService } from './paging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IntraHES';
  selection:number = 0;

  constructor(pagingService : PagingService){
    pagingService.selectionUpdated.subscribe((sel:number) => {
      this.selection = sel;
    })
  }

}

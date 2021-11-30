import { Component, OnInit } from '@angular/core';
import { PagingService } from 'src/app/paging.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private pagingService : PagingService) { }

  ngOnInit(): void {
  }

  onclick(opt:number){
    this.pagingService.update(opt);
  }

}

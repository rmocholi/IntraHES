import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PagingService } from '../paging.service';

@Component({
  selector: 'app-intra-hes',
  templateUrl: './intra-hes.component.html',
  styleUrls: ['./intra-hes.component.css']
})
export class IntraHESComponent implements OnInit {



  constructor(private pagingService: PagingService) {
   }

  ngOnInit(): void {
  }

  onclick(opt:number){
    this.pagingService.update(opt);
  }

}

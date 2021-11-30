import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingService {

  selectionUpdated = new EventEmitter<number>();

  constructor() { }

  update(opt:number){
    this.selectionUpdated.emit(opt)
  }
}

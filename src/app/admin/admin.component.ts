import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  validation:boolean = false;

  ngOnInit(): void {
  }


  onval(val :boolean){
    this.validation = val;
  }

}

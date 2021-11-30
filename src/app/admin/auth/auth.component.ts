import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Sha256 from './crypt.js'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild('form') adminForm!: NgForm;

  @Output() validation = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }


   auth() {
    const p = "973626eb162dbf1adcb5b3ce114c3d0553815f4f4b5a692bd37fbbed81f697d8"
    if (Sha256.hash(this.adminForm.value.pw) == p) {
        this.validation.emit(true);
    }else{
      alert('Contraseña incorrecta')
      this.validation.emit(false);
    }

  }
}

import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {Company} from '../company';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  isLinear = true;
  showForm = true;
  successAlert = false;
  personDetails = new Person('','','','','','');
  company = new Company('','','');

  moveNext(){
    console.log(this.personDetails);
  }
  changeForm(){
    this.showForm = !this.showForm;
  }
  successChange(){
    this.successAlert = !this.successAlert;
  }
  submitForm(){
    this.changeForm();
    this.successChange();

    setTimeout(()=>{
      this.successChange();
    }, 3000)
  }



  constructor() {}

  ngOnInit() {  }

}

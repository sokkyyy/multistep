import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import {Person} from '../person';
import {Company} from '../company';


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  @Input() personDetails:Person;
  @Input() company:Company;
  @Output() editDetails = new EventEmitter();

  edit(){
    this.editDetails.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}

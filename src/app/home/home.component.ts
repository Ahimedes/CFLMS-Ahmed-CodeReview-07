import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Adventureteaser: any;
  Businessteaser: any;
  Familyteaser: any;
  Sportsteaser: any;
  Honeymoonteaser: any;
  Cultureteaser: any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  projectname: string;

  constructor() {
    this.projectname = "Travel Agency"
   }

  ngOnInit(): void {
  }

}

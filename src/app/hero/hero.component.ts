import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroHeading: string;

  heroText: string;

  heroBtnText: string;

  heroBtnUrl: string;

  heroBackground: any;

  constructor() {
    this.heroHeading = "Travel Agency";

    this.heroText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.";

    this.heroBtnText = "Learn more";

    this.heroBackground = "assets/img/hero.jpg"

    this.heroBtnUrl = "#";
  }

  ngOnInit(): void {
  }

}

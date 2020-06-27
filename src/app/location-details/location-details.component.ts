import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { locations } from '../locations';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  location;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(location) {
    window.alert('Your choice has been added to the cart!');
    this.cartService.addToCart(location);
  }
 

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.location = locations[+params.get('locationId')];
     });
  }

}

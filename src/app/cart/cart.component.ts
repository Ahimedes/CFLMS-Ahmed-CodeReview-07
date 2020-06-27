import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  checkoutform;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutform = this.formBuilder.group({
      name: '',
      address: ''
    });

  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();

  }
  //Question to trainer: Why does the function below return an error?
  // onSubmit() {
    
  //   window.alert('Your order has been submitted');
 
  //   this.items = this.cartService.clearCart();
  //   this.checkoutform.reset();
  // }
  onSubmit(customerData) {

    console.warn('Your order has been submitted', customerData);
  
    this.items = this.cartService.clearCart();
    this.checkoutform.reset();
  }



}


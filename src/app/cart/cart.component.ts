import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,) { }

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  ngOnInit(): void {
  }
  onSubmit(): void {
    // Process checkout data here
    window.alert("Submitted, "+`${this.checkoutForm.value.name}`+
    ". \nShipping to: "+`${this.checkoutForm.value.address}`);
    this.items = this.cartService.clearCart();
    
    console.warn('Your order has been submitted',       this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}

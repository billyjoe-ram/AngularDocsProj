import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  items: Product[] = this.cartService.getItems();

  checkoutForm: FormGroup = this.formBuilder.group({
    name: "",
    address: ""
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();

    console.warn("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}

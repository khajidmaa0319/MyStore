import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    items;
    checkoutForm;
  
    private readonly newProperty = this.checkoutForm;

    constructor(
      private cartService: CartService,
      private formBuilder: FormBuilder,
    ) {
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });
    }
  
    ngOnInit() {
      this.items = this.cartService.getItems();
      
    }
    
    onSubmit(customerData) {
        // Process checkout data here
        
        
        this.items = this.cartService.clearCart();
        
        this.checkoutForm.reset();
        
        console.log('Your order has been purchased', customerData);
        window.alert('Your order has been purchased. ');
        
      }
      
}
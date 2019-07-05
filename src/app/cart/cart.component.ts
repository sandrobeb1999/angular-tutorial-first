import { Component, OnInit } from '@angular/core';

import { CartService } from './../cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
    items;
    
    constructor(
        private cartServices: CartService
    ) { 
        this.items= this.cartServices.getItems()
    }

    ngOnInit(){}
    removeItem(productId) {
        this.cartServices.removeItem(productId);
    }
    clearCart() {
        this.cartServices.clearCart();
        this.items= this.cartServices.getItems();
    }
    
}
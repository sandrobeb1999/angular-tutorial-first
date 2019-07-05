import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    constructor(private http: HttpClient) {}
    items= [];
  
    addToCart(product) {
        this.items.push(product);
    }

    removeItem(productId) {
        this.items.splice(productId, 1);
      }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items= [];
        return this.items;
    }

    getShippingCosts () {
        return this.http.get('/assets/shipping.json')
    }
}
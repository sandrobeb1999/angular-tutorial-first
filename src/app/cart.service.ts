import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    constructor() {}
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

}
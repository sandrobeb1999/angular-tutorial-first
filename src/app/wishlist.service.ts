import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    constructor() {}
    wishlist= [];
  
    addToWish(product) {
        this.wishlist.push(product);
    }

    removeWish(productId) {
        this.wishlist.splice(productId, 1);
      }

    getWish() {
        return this.wishlist;
    }

    clearWish() {
        this.wishlist= [];
        return this.wishlist;
    }

}
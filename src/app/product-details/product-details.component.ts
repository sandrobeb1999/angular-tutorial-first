import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { products } from "./../products";
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
    product;
    wishlist = [];

    constructor(
        private route: ActivatedRoute,
        private cartService: CartService,
        private wishlistService: WishlistService
    ) {
        this.wishlist = this.wishlistService.getWish()
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.product = products[+params.get('productId')];
        })
    }
    addToCart(product) {
        window.alert('Your Product has been added!');
        this.cartService.addToCart(product);
    }

    addToWish(product) {
        window.alert('Your Product has been added!');
        this.wishlistService.addToWish(product);
    }

    removeWish(productId) {
        this.wishlistService.removeWish(productId);
    }

    Include(product) {
        return this.wishlist.includes(product);
    }
}
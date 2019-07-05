import { Component, OnInit } from '@angular/core';
import { WishlistService } from './../wishlist.service';

@Component({
  selector: 'app-cart',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})

export class WishlistComponent implements OnInit {
  wishlist;

  constructor(
    private wishlistService: WishlistService
  ) {
    this.wishlist = this.wishlistService.getWish()
  }

  ngOnInit() { }
  removeWish(productId) {
    this.wishlistService.removeWish(productId);
  }
  clearWish() {
    this.wishlistService.clearWish();
    this.wishlist = this.wishlistService.getWish();
  }
}
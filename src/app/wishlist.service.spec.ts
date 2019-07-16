import { WishlistService } from "./wishlist.service";

describe('Testing WishlistService', () => {
    let service;

    beforeEach(() => {
        service = new WishlistService();
    });

    it('Method addToWish should add items in array', () => {
        service.addToWish('wish');
        expect(service.wishlist.includes('wish')).toBe(true);
    });

    it('Method getWish should return items from array', () => {
        expect(service.getWish()).toBe(service.wishlist);
    });

    it('Method clearWish should remove all items from array', () => {
        expect(service.wishlist.length).toBe(0);
        expect(service.clearWish()).toBe(service.wishlist);
    });

    it('Method removeWish should remove single item from array', () => {
        service.addToWish('wish');
        expect(service.wishlist.includes('wish')).toBe(true);
        service.removeWish('wish');
        expect(service.wishlist.includes('wish')).toBe(false);
    });
})

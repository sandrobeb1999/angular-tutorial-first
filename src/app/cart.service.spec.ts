import { CartService } from './cart.service';

describe('Testing CartService', () => {
    let service;

    beforeEach(() => {
        service = new CartService();
    });

    it('Method addToCart should add items in array', () => {
        service.addToCart('cart');
        expect(service.items.includes('cart')).toBe(true);
    });

    it('Method getItems should return items from array', () => {
        expect(service.getItems()).toBe(service.items);
    });

    it('Method clearCart should remove all items from array', () => {
        expect(service.items.length).toBe(0);
        expect(service.clearCart()).toBe(service.items);    });


    it('Method removeItem should remove single item from array', () => {
        service.addToCart('cart');
        expect(service.items.includes('cart')).toBe(true);
        service.removeItem('cart');
        expect(service.items.includes('cart')).toBe(false);
    });
});

import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
    items;
    checkedForm;
    
    constructor(
        private cartServices: CartService,
        private formBuilder: FormBuilder
    ) { 
        this.items= this.cartServices.getItems();

        this.checkedForm= formBuilder.group({
            name: ['', Validators.minLength(2)],
            address: formBuilder.group({
                street:'',
                city:'',
                state:'',
                zip:''
            })
        })
    }

    ngOnInit(){}
    removeItem(productId) {
        this.cartServices.removeItem(productId);
    }
    clearCart() {
        this.cartServices.clearCart();
        this.items= this.cartServices.getItems();
    }   

    onSubmit() {
        console.log(this.checkedForm.value);

        this.checkedForm.reset();
    }

    resetForm(){
        this.checkedForm.patchValue({
            name: "Sandro"
        });
    }
}
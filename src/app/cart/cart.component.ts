import { Component, OnInit } from '@angular/core';
import {FooterComponent} from '../components/footer/footer.component'
import {Cart, CartItem} from '../Interface/cart.interface';
import { NgIf } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

//import { NgFor, NgIf } from '@angular/common';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    MatTableModule,
    
    NgIf,
    FooterComponent,
    RouterModule,
    RouterOutlet,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit{
  _cart: Cart = {items: []};

  constructor(private cartService: CartService){

  }
  ngOnInit():void{
    this.cartService.getCartItems().subscribe(cart => {
      this._cart = cart;
   }); 
   this.dataSource = this._cart.items;
  }

  dataSource: Array<CartItem> = [];
  displayedColumns : Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'size',
    'action'
  ]

  minus(int:number): number{
    if(int>1){
      return int-1;
    }else{
      return 1;
    }
    
  }
  sum(int:number): number{
    return int+1;
    
  }

  total(items : Array<CartItem>): number {
    return items.map((item)=> item.price * item.quantity).reduce((prev,current) => prev + current, 0);
  }

  eliminateElement(id:number):void{
    this.cartService.removeCartItem(id);
  }

  
}

import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { NgFor, NgIf } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { Cart, CartItem } from '../../Interface/cart.interface';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    HeaderComponent,
    RouterOutlet,
    RouterModule,
    NgFor,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
 _cart: Cart = {items: []};
 itemsQuantity = 0;
 constructor(private cartService: CartService){

 }
 ngOnInit():void{
  this.cartService.getCartItems().subscribe(cart => {
    this._cart = cart;
 });
 }
 lenghtNum(obj: any): string {
  if( Object.keys(obj).length != 0){
    return Object.keys(obj).length.toString();
  }
  else{
    return "";
  }
  
  }
  total(items: Array<CartItem>):number{
    var num: number = 0;
    for(let item of items){
      num += item.price
    }
    return num;
  }

}

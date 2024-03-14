import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoxComponent} from '../box/box.component';

import {HeaderComponent} from '../components/header/header.component';
import {FooterComponent} from '../components/footer/footer.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';


import { ListItem } from '../Interface/list.interface';
import { CartItem } from '../Interface/cart.interface';

import { NgIf } from '@angular/common';
import { ListService } from '../service/list.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-zoom',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    RouterModule,
    BoxComponent,
    CommonModule,
    NgIf,
  ],
  templateUrl: './zoom.component.html',
  styleUrl: './zoom.component.css'
})
export class ZoomComponent {

  index: number;
  color1 = "burlywood";
  color2 = "black";
  zoomItem: ListItem = {
    src: '',
    srcOut: '',
    name: '',
    category: '',
    price: 0,
    discount: 0,
    id: 0
  };

  productList: Array<ListItem> = [];
  showList: Array<ListItem> = [];
  productId: string | null;
  size: string = '';

  constructor(private activateRoute: ActivatedRoute, private cartService: CartService, private listService: ListService) {
    this.index = 1;
    this.productId = "";
  }

  descuento(price: number, discount: number): number {
    return Math.ceil(price * (1 - discount / 100));
  }

  changeSize(parameter: string):void{
    this.size = parameter;
  }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.paramMap.get('productId');
    this.index = Number(this.productId) + 1;
    let result = this.listService.findItemById(Number(this.productId));
    console.log(result);
    if (result) {
      this.zoomItem = { ...result };
    }

    //Revisar

    this.listService.getListItems().subscribe(items => {
      this.productList = items;
      if(this.index+2 < this.productList.length){
        this.showList.push(this.productList[this.index]);
        this.showList.push(this.productList[this.index+1]);
        this.showList.push(this.productList[this.index+2]);
      }else{
        this.showList.push(this.productList[1]);
        this.showList.push(this.productList[2]);
        this.showList.push(this.productList[3]);
      }
      
    });
  }

  minusSlides( index:number):void{
    if(this.index > Number(this.productId)+1){
      for (let i = 3; i > 0; i--) {
        this.showList[i-1] = this.productList[i+this.index-2];
        console.log(i-1,"=",this.index,"....");
      }
      this.index=this.index-1;
    }
    
}
  plusSlides(index:number):void{
    
    for (let i = 0; i < 3; i++) {
      if(this.index + 3 < this.productList.length){
        this.showList[i] = this.productList[i+this.index+1];
        console.log(i,"=",this.index+i+1,"....");
      }else{
        this.index = 0;
        i--;
      }
    }
    this.index=this.index+1;
    console.log(this.index);
  }

  //Añadir productos al carrito
  onAddToCart(product:ListItem):void{
    if(this.size == ''){
      window.alert("No has seleccionado talle");
    }else{
      this.cartService.addToCart({
        src: product.src,
        name: product.name,
        price: product.price*(1-(product.discount/100)),
        //size: product.size,
        size: this.size,
        quantity:1,
        id: product.id
      });
    }
  }
  
  
}

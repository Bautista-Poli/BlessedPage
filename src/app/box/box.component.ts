import { Component, Input } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

import { ListItem } from '../Interface/list.interface';
import { NgIf } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    NgIf,

    RouterOutlet,
    RouterModule
  ],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {
  @Input() product!:ListItem;


  descuento(price:number, discount: number): number{
    return Math.ceil(price*(1- discount/100));
  }

  cuotas(price:number):number{
    return Math.ceil(price/3);
  }

  oposite(valor:string):string{
    if(valor=='foto1'){
      return 'foto2';
    }else{
      return 'foto1';
    }
  }
  changeText: boolean;
  
  //changeClass: string;

    constructor() {
       this.changeText = false;
       //this.changeClass = 'foto1';
    }

}

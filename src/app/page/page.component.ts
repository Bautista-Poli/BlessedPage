import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

import {HeaderComponent} from '../components/header/header.component';
import {BoxComponent} from '../box/box.component';
import {FooterComponent} from '../components/footer/footer.component';

import { ListItem } from '../Interface/list.interface';

@Component({
  selector: 'app-page',
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

    CommonModule,
    HeaderComponent,
    BoxComponent,
    PageComponent,
    FooterComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  productList: ListItem[] = [{
    src: "../../assets/images/Ropa/Buzos/buzo(2).jpg",
    srcOut: "../../assets/images/Ropa/Buzos/buzo(2).jpg",
    category: "buzo",
    name: "Buzo marron",
    price: 43000,
    discount: 5,
    id: 0, 
  },{
    src: "../../assets/images/Ropa/Pantalones/pantalon(1).jpg",
    srcOut: "../../assets/images/Ropa/Pantalones/pantalon(2).jpg",
    category: "pantalon",
    name: "Pantalon marron",
    price: 15000,
    discount: 50,
    id: 1,
  },{
    src: "../../assets/images/Ropa/Pantalones/pantalon(3).jpg",
    srcOut: "../../assets/images/Ropa/Pantalones/pantalon(4).jpg",
    category: "pantalon",
    name: "Pantalon negro",
    price: 25000,
    discount: 0,
    id: 2, 
  },
  {
    src: "../../assets/images/Ropa/Remeras/remera(1).jpg",
    srcOut: "../../assets/images/Ropa/Remeras/remera(2).jpg",
    category: "remera",
    name: "Remera negra",
    price: 25000,
    discount: 10,
    id: 3, 
  },
  {
    src: "../../assets/images/Ropa/Remeras/remera(3).jpg",
    srcOut: "../../assets/images/Ropa/Remeras/remera(4).jpg",
    category: "remera",
    name: "Remera negra",
    price: 23000,
    discount: 10,
    id: 4, 
  },
  {
    src: "../../assets/images/Ropa/Remeras/remera(5).jpg",
    srcOut: "../../assets/images/Ropa/Remeras/remera(6).jpg",
    category: "remera",
    name: "Remera negra",
    price: 23000,
    discount: 10,
    id: 5, 
  },
  {
    src: "../../assets/images/Ropa/Remeras/remera(7).jpg",
    srcOut: "../../assets/images/Ropa/Remeras/remera(7).jpg",
    category: "remera",
    name: "Remera negra",
    price: 23000,
    discount: 10,
    id: 6, 
  }
  ];

}

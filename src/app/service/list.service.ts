import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, map } from 'rxjs';
import {ListItem, List } from '../Interface/list.interface'


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private list: BehaviorSubject<List> = new BehaviorSubject<List>({items: [
      {
      src: "../../assets/images/Ropa/Buzos/buzo(2).jpg",
      srcOut: "../../assets/images/Ropa/Buzos/buzo(2).jpg",
      category: "buzo",
      name: "Buzo marron",
      price: 43000,
      discount: 5,
      id: 0, 
      },
      {
        src: "../../assets/images/Ropa/Pantalones/pantalon(1).jpg",
        srcOut: "../../assets/images/Ropa/Pantalones/pantalon(2).jpg",
        category: "pantalon",
        name: "Pantalon marron",
        price: 15000,
        discount: 50,
        id: 1,
      },
      {
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
        name: "Remera gris",
        price: 23000,
        discount: 10,
        id: 4,
      },
      {
        src: "../../assets/images/Ropa/Remeras/remera(5).jpg",
        srcOut: "../../assets/images/Ropa/Remeras/remera(6).jpg",
        category: "remera",
        name: "Remera azul",
        price: 23000,
        discount: 10,
        id: 5,
      },
      {
        src: "../../assets/images/Ropa/Remeras/remera(7).jpg",
        srcOut: "../../assets/images/Ropa/Remeras/remera(7).jpg",
        category: "remera",
        name: "Remera Bordo",
        price: 23000,
        discount: 10,
        id: 6,
      }
    ]
  });
  constructor(private _snackBar : MatSnackBar) { }

  

  getListItems():Observable<ListItem[]>{
    return this.list.asObservable().pipe(
      map(list => list.items) // Assuming 'list' contains 'items' array
    );
  }

  getList(): List {
    return this.list.getValue();
  }
  
  // Function to search for an item by ID
  findItemById(itemId: number): ListItem | undefined {
    const cart = this.getList();
    return cart.items.find(item => item.id === itemId);
  }

  
  /*
  find(_item:number){
      
  }
  */
}

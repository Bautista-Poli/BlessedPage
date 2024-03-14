import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../Interface/list.interface';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  //https://angular.io/api/common/http/HttpClient#description
  getAllProducts(limit = '12',sort = 'desc', category?: string): Observable<Array<ListItem>> {
    return this.httpClient.get<Array<ListItem>>(`${STORE_BASE_URL}/products${category ? '/category/' + category : ''}?sort=${sort}&limit=${limit}`);
  }

  getAllCategories(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(`${STORE_BASE_URL}/products/categories`);
  }
}
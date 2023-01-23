import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryProductModel } from '../models/category-product.model';

@Injectable()
export class CategoryProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllProducts(): Observable<CategoryProductModel[]> {
    return this._httpClient.get<CategoryProductModel[]>('https://fakestoreapi.com/products');
  }

  getProductsByCategory(category: string): Observable<CategoryProductModel[]> {
    return this._httpClient.get<CategoryProductModel[]>(`https://fakestoreapi.com/products/category/${category}`);
  }
}

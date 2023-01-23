import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { ProductMetadataModel } from '../models/product-metadata.model';
import {Observable} from "rxjs";

@Injectable()
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/products');
  }

  getProductMetadata(productId: string): Observable<ProductMetadataModel[]> {
    return this._httpClient.get<ProductMetadataModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/products/${productId}/product-metadata`);
  }

}

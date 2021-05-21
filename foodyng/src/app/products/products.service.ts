import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Iproduct} from './product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  createProduct(productBody):Observable<Iproduct>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.post<Iproduct>(productUrl, productBody);
  }

  viewProduct(productId): Observable<Iproduct>{
    const productUrl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.get<Iproduct>(productUrl );
  }

  updateProduct(productId, productBody): Observable<Iproduct>{
    const productUrl = 'http://localhost:3000/product'+productId;
    return this.httpClient.put<Iproduct>(productUrl, productId);
  } 

  deleteProduct(productId): Observable<Iproduct>{
    const productUrl = 'http://localhost:3000/product'+productId;
    return this.httpClient.delete<Iproduct>(productUrl);
  }



}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Iproduct} from './product'
import { Observable } from 'rxjs';
import {Icategory} from '../site-framework/site-framework/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Iproduct>{
    const productUrl = 'http://localhost:3000/meals';
    return this.httpClient.get<Iproduct>(productUrl);
  }

  getCategories(): Observable<Icategory> {
    const categoriesUrl = 'http://localhost:3000/meals ';
    return this.httpClient.get<Icategory>(categoriesUrl);
  }

  // createProduct(productBody):Observable<Iproduct>{
  //   const productUrl = 'http://localhost:3000/products';
  //   return this.httpClient.post<Iproduct>(productUrl, productBody);
  // }

  // viewProduct(productId): Observable<Iproduct>{
  //   const productUrl = 'http://localhost:3000/product/'+productId;
  //   return this.httpClient.get<Iproduct>(productUrl );
  // }

  // updateProduct(productId, productBody): Observable<Iproduct>{
  //   const productUrl = 'http://localhost:3000/product'+productId;
  //   return this.httpClient.put<Iproduct>(productUrl, productId);
  // } 

  // deleteProduct(productId): Observable<Iproduct>{
  //   const productUrl = 'http://localhost:3000/product'+productId;
  //   return this.httpClient.delete<Iproduct>(productUrl);
  // }



}

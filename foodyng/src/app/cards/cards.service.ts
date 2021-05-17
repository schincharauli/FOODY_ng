import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor( private http:HttpClient) { }

  getData(){
    let url= 'https://dev.foodkit.io/api/v5/storefront/content/tenants/{tenant}/branch-list';
    return this.http.get(url);
  }


}

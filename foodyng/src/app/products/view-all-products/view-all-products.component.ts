import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {Iproduct} from "../product"
import {Icategory} from '../../site-framework/site-framework/category'


@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.scss']
})
export class ViewAllProductsComponent implements OnInit {

  // Icategory: any;
  
  // categoryList: any;

  productList: any;

  constructor (private productsService: ProductsService) { }

  
  ngOnInit(): void {

    this.productsService.getAllProducts().subscribe( data => {
      this.productList = data;
      console.log(data)
    });

    // this.productsService.getCategories().subscribe( data => {
    //   this.productList = data;
    
    // });

    }
  

}

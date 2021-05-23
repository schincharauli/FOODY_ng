import { Component, OnInit } from '@angular/core';

import { Iproduct } from '../../products/product';
import { ProductsService} from '../../products/products.service'
import { Icategory } from './category';

@Component({
  selector: 'app-site-framework',
  templateUrl: './site-framework.component.html',
  styleUrls: ['./site-framework.component.scss']
})
export class SiteFrameworkComponent implements OnInit {
  

  categoryList: any;

  productList: any

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    
    this.productService.getCategories().subscribe( data => {
      this.categoryList = data;

    });

    this.productService.getAllProducts().subscribe( data => {
      this.productList = data;
      console.log(data)
    })

  


  }

}

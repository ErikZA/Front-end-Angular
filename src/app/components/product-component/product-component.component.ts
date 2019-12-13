import { Products } from './../../models/base/Product.models';
import { ProductService } from './../../services/productService/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  products: Products[];
  MyError: any;

  constructor(private productService: ProductService) {
    this.getProducts();
   }

  ngOnInit() {
  }

 public getProducts() {
    this.productService.getProducts().subscribe(result => {
      this.products = result;
    },
    error => {
      this.MyError = error;
      console.log(error);
    });
  }

}

import { ProductsGubeeDTO } from './../../models/PoductGubeeDTO.model';
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
  gubee: ProductsGubeeDTO[];
  MyError: any;

  constructor(private productService: ProductService) {
    this.getProductsGubee();
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

  public getProductsGubee() {
    this.productService.getProductsGubee().subscribe(result => {
      this.gubee = result;
    },
    error => {
      this.MyError = error;
      console.log(error);
    });
  }

}

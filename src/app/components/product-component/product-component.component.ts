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
  words = new Array<string>();
  itemSearch = new Array<string>();

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
      console.log(error);
    });
  }

  public getProductPerNameProduct(name: string) {
    this.productService.getProductsperName(name).subscribe(result => {
      this.products = result;
      this.itemSearch.push('products');
      this.words.push(name);
    },
    error => {
      console.log(error);
    });
  }

  public getProductPerNameTechnology(name: string) {
    this.productService.getProductsperNameTechnology(name).subscribe(result => {
      this.products = result;
      this.itemSearch.push('technology');
      this.words.push(name);
    },
    error => {
      console.log(error);
    });
  }

  public getProductPerNameTarget(name: string) {
    this.productService.getProductsperNameTarget(name).subscribe(result => {
      this.products = result;
      this.itemSearch.push('target');
      this.words.push(name);
    },
    error => {
      console.log(error);
    });
  }

  public removeItem(name: string) {
  }
}

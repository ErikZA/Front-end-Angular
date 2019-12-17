import * as _ from 'lodash';
import { Products } from './../../models/base/Product.models';
import { ProductService } from './../../services/productService/product.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  products: Products[] = new Array<Products>();
  words: any[] = new Array<any>();

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  ngOnInit() {
  }

 private getProducts() {
    this.productService.getProducts().subscribe(result => {
      console.log('Serviço Disponivel');
    },
    error => {
      console.log(error);
    });
  }

  public getProductPerNameProduct(name: string) {
    this.productService.getProductsPerName(name).subscribe(result => {
      if (this.pushItem(result)) {
        this.words.push(name);
      } else {
        alert(name + ' Já está presente na busca \n Ou a Categoria Incorreta \n Ou não Foi Encontrado(a)');
      }
    },
    error => {
      console.log(error);
    });
  }

  public getProductPerNameTechnology(name: string) {
    this.productService.getProductsPerNameTechnology(name).subscribe(result => {
      if (this.pushItem(result)) {
        this.words.push(name);
      } else {
        alert(name + ' Já está presente na busca \n Ou a Categoria Incorreta \n Ou não Foi Encontrado(a)');
      }
    },
    error => {
      console.log(error);
    });
  }

  public getProductPerNameTarget(name: string) {
    this.productService.getProductsPerNameTarget(name).subscribe(result => {
      if (this.pushItem(result)) {
        this.words.push(name);
      } else {
        alert(name + ' Já está presente na busca \n Ou a Categoria Incorreta \n Ou não Foi Encontrado(a)');
      }
    },
    error => {
      console.log(error);
    });
  }

  private pushItem(listProducts: Products[]) {
    const aux: Products[] = _.differenceBy(listProducts, this.products, 'id');
    if (aux.length > 0) {
     aux.forEach( pdt => this.products.push(pdt) );
     return true;
    }
    return false;
  }

  public removeItem(name: string) {
    this.words = this.words.filter(wds => wds !== name);
    //this.products = [];
  }
}

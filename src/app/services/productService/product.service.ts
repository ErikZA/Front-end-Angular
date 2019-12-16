import { Products } from './../../models/base/Product.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  public getService(): Observable<Products[]> {
    return this.http.get<Products[]>
    ('https://back-end-gubee.herokuapp.com/service');
  }

  public getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>
    ('https://back-end-gubee.herokuapp.com/service/products');
  }

  public getProductsperName(name: string): Observable<Products[]> {
    return this.http.get<Products[]>
    ('https://back-end-gubee.herokuapp.com/service/productpernamelist/' + name);
  }

  public getProductsperNameTechnology(name: string): Observable<Products[]> {
    return this.http.get<Products[]>
    ('https://back-end-gubee.herokuapp.com/service/productpernametechnology/' + name);
  }

  public getProductsperNameTarget(name: string): Observable<Products[]> {
    return this.http.get<Products[]>
    ('https://back-end-gubee.herokuapp.com/service/productpernametarget/' + name);
  }
}

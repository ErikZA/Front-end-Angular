import { Products } from './../../models/base/Product.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>
    ('http://localhost:8081/service');
  }

  public getProductsperName(name: string): Observable<Products[]> {
    return this.http.get<Products[]>
    ('https://jsonstorage.net/api/items/73cab4d7-6481-4d75-bcf6-a746f16ef1f7' + name);
  }

  public getProductsperNameTechnology(name: string): Observable<Products[]> {
    return this.http.get<Products[]>
    ('https://jsonstorage.net/api/items/73cab4d7-6481-4d75-bcf6-a746f16ef1f7/' + name);
  }

  public getProductsperNameTarget(name: string): Observable<Products[]> {
    return this.http.get<Products[]>
    ('https://jsonstorage.net/api/items/73cab4d7-6481-4d75-bcf6-a746f16ef1f7/' + name);
  }
}

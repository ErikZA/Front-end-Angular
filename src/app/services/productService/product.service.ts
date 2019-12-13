import { Products } from './../../models/base/Product.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsGubeeDTO } from './../../models/PoductGubeeDTO.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>
    ('https://back-end-gubee.herokuapp.com/service');
  }

  public getProductsGubee(): Observable<ProductsGubeeDTO[]> {
    return this.http.get<ProductsGubeeDTO[]>
    ('https://jsonstorage.net/api/items/998ce6f5-c6f8-47a2-b40a-e773fe5dc8ee');
  }

  public getProductsperName(name: string): Observable<Products[]> {
    return this.http.get<Products[]>
    ('https://back-end-gubee.herokuapp.com/service/productpername/' + name);
  }

  public getProductsperNameTechnology(name: string): Observable<Products[]> {
    return this.http.get<Products[]>
    ('https://back-end-gubee.herokuapp.com/service/productpertechnology/' + name);
  }

  public getProductsperNameTarget(name: string): Observable<Products[]> {
    return this.http.get<Products[]>
    ('https://back-end-gubee.herokuapp.com/service/productpertarget/' + name);
  }
}

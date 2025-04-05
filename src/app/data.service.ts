import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_LINk = "https://67e7951320e3af747c3eedeb.mockapi.io/products";
  cartCount : number = 0;

  public mainArr: Product[] = [];
  
  constructor(private http: HttpClient) {
  }

  getData(){
    return this.http.get(this.API_LINk);
  }

  postData(product : Product){
    return this.http.post(this.API_LINk, product);
  }
}

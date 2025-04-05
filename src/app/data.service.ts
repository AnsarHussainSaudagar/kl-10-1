import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { filter, map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private API_LINk = 'https://67e7951320e3af747c3eedeb.mockapi.io/products';
  cartCount: number = 0;

  dataSubject = new Subject();

  public mainArr: Product[] = [];

  constructor(private http: HttpClient) {}

  getData() {
    this.http.get(this.API_LINk).pipe(
      map((data: any) => {
        
        const mapData = data.map((prod: any) => {
          return {
            ...prod,
            price: prod.price * 85.53,
          };
        });

        return mapData;
      }),
    ).subscribe((data) => {
      this.dataSubject.next(data);
    })
  }

  postData(product: Product) {
    return this.http.post(this.API_LINk, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.API_LINk + '/' + id);
  }
}

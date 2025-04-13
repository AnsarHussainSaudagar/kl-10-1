import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { map, Subject, } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private API_LINk = 'https://67e7951320e3af747c3eedeb.mockapi.io/products';
  cartCount: number = 0;

  isLoggedIn = true;

  public mainArr: Product[] = [];

  constructor(private http: HttpClient) {}

  public productSubject = new Subject();

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
      })
    ).subscribe({
      next: (products) => {
        this.productSubject.next(products);
      }
    })
    // .subscribe((data) => {
    //   this.dataSubject.next(data);
    // })
  }

  getSingleProduct(id : number){
    return this.http.get(this.API_LINk + "/" + id);
  }

  postData(product: Product) {
    return this.http.post(this.API_LINk, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.API_LINk + '/' + id);
  }
}

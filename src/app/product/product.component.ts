import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(public dataService: DataService){}

  product !: Product ;
  ngOnInit(){
    this.dataService.getSingleProduct(1).subscribe({
      next: (product : any)=>{
        this.product = product;
      }
    })
  }
}

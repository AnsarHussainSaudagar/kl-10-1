import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  createObj : Product = {
    name: '',
    img: '../../assets/images/playstation.jpg',
    description: '',
    price: 0
  };
  onSubmit(){
    // this.products.push(this.createObj);
  }
}

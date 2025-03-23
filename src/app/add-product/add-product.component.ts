import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { DataService } from '../data.service';

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

  constructor(private dataService: DataService){

  }

  onSubmit(){
    this.dataService.mainArr.push(this.createObj);
    console.log(this.dataService.mainArr);
  }
}

import { Component, Input, OnChanges } from '@angular/core';
import { Product } from '../models/product.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-cards',
  templateUrl: './main-cards.component.html',
  styleUrls: ['./main-cards.component.css']
})
export class MainCardsComponent {
  number : number[]  = []
  name : string = ""
  count = 0;
  counts: any = [];
  names:any = [];


  createObj : Product = {
    name: '',
    img: '../../assets/images/playstation.jpg',
    description: '',
    price: 0
  };

  private _search : string = "";

  products : Product[] = [];

  constructor(private dataService: DataService){
    dataService.getData().subscribe({
      next: (products: any) => {
        this.products = products;
        
      }
    })
  }
  @Input('myNumber') num !: number;

  ngOnInit(){
    // console.log(`num in OnInit = ${this.num}`);
    
  }

  get search(){
    return this._search;
  }


  set search(value){
    this._search = value;
  }
  
  currDate = new Date();

  onClickMe(){
    this.count++;
    this.counts.push(this.count)
  }

  onAddName(){
    this.names.push(this.name);
    // console.log(this.name);
  }
  
  onSubmit(){
    this.products.push(this.createObj);
  }

  onClickAddToCart(){
    this.dataService.cartCount++;
    // console.log(this.dataService.cartCount);
    
  }

}

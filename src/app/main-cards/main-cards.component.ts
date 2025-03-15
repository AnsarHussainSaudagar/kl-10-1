import { Component } from '@angular/core';
import { Product } from '../models/product.model';

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
  names:any = []
  private _search : string = "";

  constructor(){
    console.log(this._search);
    
  }
  get search(){
    return this._search;
  }

  get filteredProducts(){
    if(this._search !== ""){
      const filteredArr = this.products.filter((prod : Product) => {
        return prod.name.toLowerCase().includes(this._search.toLowerCase());
      });
      return filteredArr;
    }
    
    return this.products;
  }

  set search(value){
    this._search = value;
  }


  currDate = new Date();

  onClickMe(){
    this.count++;
    this.counts.push(this.count)
  }

  products : Product[] = [
    {
      name : "Playstation",
      img: "../../assets/images/playstation.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 100.111,
    },
    {
      name : "Iphone",
      img: "../../assets/images/iphone.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 80,
    },
    {
      name : "Samsung TV",
      img: "../../assets/images/samsung_tv.avif",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 50,
    },
    {
      name : "Samsung TV",
      img: "../../assets/images/samsung_tv.avif",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 60,
    },
    {
      name : "Samsung TV",
      img: "../../assets/images/samsung_tv.avif",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 130.12,
    },
    {
      name : "Samsung TV",
      img: "../../assets/images/samsung_tv.avif",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 130.91,
    },
    {
      name : "Samsung TV",
      img: "../../assets/images/samsung_tv.avif",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 130.34523,
    },
  ];

  // products : any = [];

  onAddName(){
    this.names.push(this.name);
    console.log(this.name);
  }

}

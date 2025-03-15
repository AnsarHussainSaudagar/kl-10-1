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

  onClickMe(){
    this.count++;
    this.counts.push(this.count)
  }

  products : Product[] = [
    {
      name : "Playstation",
      img: "../../assets/images/playstation.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 100,
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
      price: 130,
    },
    {
      name : "Samsung TV",
      img: "../../assets/images/samsung_tv.avif",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 130,
    },
    {
      name : "Samsung TV",
      img: "../../assets/images/samsung_tv.avif",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 130,
    },
    {
      name : "Samsung TV",
      img: "../../assets/images/samsung_tv.avif",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 130,
    },
    {
      name : "Samsung TV",
      img: "../../assets/images/samsung_tv.avif",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 130,
    },
  ];

  // products : any = [];

  onAddName(){
    this.names.push(this.name);
    console.log(this.name);
  }

}

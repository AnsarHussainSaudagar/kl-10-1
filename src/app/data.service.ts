import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cartCount : number = 0;

  public mainArr : Product[] = [
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
  constructor() { }
}

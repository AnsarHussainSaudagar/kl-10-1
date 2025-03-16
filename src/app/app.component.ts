import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  num : number = 1;

  isDisabled = false;
  name : any= "";

  clickHandler(){
    this.num++; 
    console.log(this.num);
       
  }

  onClick(){
    console.log("Hello world");

  }
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

  getData(productData : Product){
    // console.log(event);
    this.mainArr.push(productData)
    
  }
}




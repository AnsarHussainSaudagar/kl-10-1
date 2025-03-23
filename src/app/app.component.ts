import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { DataService } from './data.service';

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
  
}




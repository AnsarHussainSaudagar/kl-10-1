import { Component } from '@angular/core';

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
  // onInput(event: any){
  //   // console.log(event.data)
  //   if(event.data != null){
  //     this.name += event.data;
  //     console.log(this.name);
  //   }
    
  // }`
}




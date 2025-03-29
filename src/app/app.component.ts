import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';

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
  
  ngOnInit(){
 
      const myObservable$ = new Observable((observer) => {
        observer.next(1);
        observer.next(2);
        // throw Error("My Error")

        setTimeout(() => {
          observer.next(3);
        }, 2000)

        observer.next(4);
        // observer.complete();
        observer.next(5);
      });

      const ofObservable$ = of(1, 2, 3, 4);
      // console.log(ofObservable$);
      // ofObservable$.subscribe({
      //   error: (err) => {
      //     console.error(err);
      //   },
      //   complete: () => {
      //     console.log('My Observable is complete');
      //   },
      //   next: (val) => {
      //     console.log(val);
      //   },
      // });
      

      // myObservable$.subscribe(
      //   (num) => {
      //     console.log(num);
      //   }, (error) => {
      //     console.log(error);
      //   }, () => {
      //     console.log("My Observable is complete");
      //   }
      // );
      myObservable$.subscribe({
        error: (err) => {
          console.error(err)
        },
        complete: () =>{
          console.log("My Observable is complete");
        },
        next: (val) => {
          console.log(val); 
        }
      });

      
  }

  clickHandler(){
    this.num++; 
    console.log(this.num);
       
  }

  onClick(){
    console.log("Hello world");

  }
  
}




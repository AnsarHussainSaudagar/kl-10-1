import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { DataService } from '../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm ?: FormGroup;

  constructor(private dataService: DataService){
    this.productForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'description' : new FormControl(''),
      'price' : new FormControl(''),
    })
  }

  onSubmit(productForm: any){
    // console.log(productForm.valid);
    console.log(productForm.controls);
    
    if(productForm.valid){
      const productData = productForm.value

      this.dataService.postData(productData).subscribe({
        complete: ()=> {
          this.dataService.getData();
        }
      });
    } else{ 
      console.log("your form is invalid");
      
    }
    
  }
}

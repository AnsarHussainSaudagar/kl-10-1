import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(public dataService: DataService, private route: ActivatedRoute) {}

  product!: Product;
  ngOnInit() {
    this.route.params.subscribe({
      next: (data: any) => {
        console.log(data);
        this.dataService.getSingleProduct(data.product_id).subscribe({
          next: (product: any) => {
            this.product = product;
          },
        });
      },
    });
  }
}

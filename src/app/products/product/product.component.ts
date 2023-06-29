import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = []

  constructor (private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      console.log(data);
      this.products = data;
    });
  }

}

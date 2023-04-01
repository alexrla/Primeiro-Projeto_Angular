import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  myProducts: IProduct[] | undefined;

  constructor(private serviceProduct: ProductsService) {}

  ngOnInit(): void {
      this.myProducts = this.serviceProduct.getAll();
  }
}

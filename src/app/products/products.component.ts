import { Component } from '@angular/core';
import { IProduct, products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  myProducts: IProduct[] = products;
}

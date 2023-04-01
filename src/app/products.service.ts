import { Injectable } from '@angular/core';
import { IProduct, products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  myProducts: IProduct[] = products;

  constructor() { }

  getAll() {
    return this.myProducts;
  }

  getProduct(productId: number) {
    return this.myProducts.find(product => product.id == productId);
  }
}

import { Injectable } from '@angular/core';
import { IProductCart } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProductCart[] = [];

  constructor() { }

  getAmountCart() {
    const infoCart = localStorage.getItem("cartInfo");

    if(infoCart === null) return 0;
    else {
      const products = JSON.parse(infoCart);

      let amount = 0;

      for(let i = 0; i < products.length; i++)  {
        amount += products[i].amount;
      }

      return amount;
    }
  }

  addToCart(product: IProductCart) {
    const newsProduct = this.items.filter(item => product.id = item.id);

    console.log(newsProduct[0]);

    if(newsProduct.length === 0) {

      this.items.push(product);

      localStorage.setItem("cartInfo", JSON.stringify(this.items));

    } else {

      this.items[newsProduct[0].id].amount = newsProduct[0].amount;

      localStorage.setItem("cartInfo", JSON.stringify(this.items));
    }
  }

  clearCart() {
    this.items = [];

    localStorage.clear();
  }
}

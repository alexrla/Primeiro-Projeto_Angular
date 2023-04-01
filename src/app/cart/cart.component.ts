import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { IProductCart } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: IProductCart[] = [];
  total = 0;

  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.cartItems = this.cartService.getCart();

      this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((previousItem, currentItem) => previousItem + (currentItem.price * currentItem.amount), 0);
  }

  removeCartItem(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);

    this.cartService.removeItem(productId);

    this.calculateTotal();
  }

  buy() {
    alert("Compra finalizada!!!");

    this.cartService.clearCart();

    this.router.navigate(["products"]);
  }
}

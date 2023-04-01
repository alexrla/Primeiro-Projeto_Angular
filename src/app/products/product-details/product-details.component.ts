import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { NotificationService } from 'src/app/notification.service';
import { IProduct, IProductCart } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;
  quantity = 1;

  constructor(
    private serviceProduct: ProductsService,
    private route: ActivatedRoute,
    private notifyService: NotificationService,
    private cartService: CartService,
  ) {}

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;

        const productId = Number(routeParams.get("id"));

        this.product = this.serviceProduct.getProduct(productId);
    }

    addToCart() {
      this.notifyService.notify("Produto adicionado ao carrinho!");

      const newProduct: IProductCart = {
        ...this.product!,
        quantity: (this.product!.quantity - this.quantity),
        amount: this.quantity,
      };

      this.product!.quantity = (this.product!.quantity - this.quantity);

      this.cartService.addToCart(newProduct);
    }
}

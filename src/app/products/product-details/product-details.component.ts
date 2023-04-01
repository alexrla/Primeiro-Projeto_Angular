import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/products';
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
    private route: ActivatedRoute
  ) {}

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;

        const productId = Number(routeParams.get("id"));

        this.product = this.serviceProduct.getProduct(productId);

        console.log(productId);
        console.log(this.product);
    }
}

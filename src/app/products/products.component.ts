import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  myProducts: IProduct[] | undefined;

  constructor(
    private serviceProduct: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const products = this.serviceProduct.getAll();

      this.route.queryParamMap.subscribe(params => {
        const name = params.get("name")?.toLocaleLowerCase();

        if(name) {
          this.myProducts = products.filter(product => product.name.toLowerCase().includes(name));

          return;
        }

        this.myProducts = products;
      });
  }
}

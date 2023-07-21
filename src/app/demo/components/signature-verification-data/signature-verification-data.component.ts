import { Component } from '@angular/core';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-signature-verification-data',
  templateUrl: './signature-verification-data.component.html',
  styleUrls: ['./signature-verification-data.component.scss']
})
export class SignatureVerificationDataComponent {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService. getProductsSmall().then((data) => {
          this.products = data;
      });
  }

}

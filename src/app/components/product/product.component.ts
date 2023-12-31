import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { VatAddedPipe } from "../../pipes/vat-added.pipe";
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from "../../pipes/filter-pipe.pipe";
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';


@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [FormsModule, CommonModule, VatAddedPipe, FilterPipePipe, ToastrModule],
    providers: [ToastrService]
})
export class ProductComponent implements OnInit 
{
  dataLoaded = false;
  products : Product[] = [];
  filterText = "";

  constructor (private productService: ProductService, 
    private cartService:CartService,
    private activedRoute : ActivatedRoute, 
    private toastrService:ToastrService
    ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"]);
      }
      else {
        this.getProducts();
      }
    });
    //this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId: number){
    this.productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    this.toastrService.success("Sepete eklendi", product.productName);
  }
  
}

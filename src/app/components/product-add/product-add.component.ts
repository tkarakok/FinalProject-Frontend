import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder , FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
  providers:[ToastrService]
})
export class ProductAddComponent implements OnInit {

productAddForm: FormGroup;

constructor(private formBuilder : FormBuilder, 
  private productService:ProductService,
  private toastrService: ToastrService
  ){}
 

ngOnInit(): void {
    this.createProductAddForm();
  }

createProductAddForm() {
  this.productAddForm = this.formBuilder.group({
    productName: ['', Validators.required],
    unitPrice: ['', Validators.required],
    unitsInStock: ['', Validators.required],
    categoryId : ['', Validators.required]
  });
}

add(){
  if(this.productAddForm.valid){
    let productModel : Product = Object.assign({},this.productAddForm.value) 
    this.productService.add(productModel).subscribe(response=>{
      this.toastrService.success(response.message)
    },responseError=>{
      if(responseError.error.Errors.length > 0)
      {
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage, " doğrulama hatası")
          
        }
        
      }
        
    });
  }
  else{
    this.toastrService.error("Eksik ya da hatalı bilgi giridniz")
  }
}

}

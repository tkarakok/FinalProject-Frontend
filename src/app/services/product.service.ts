import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  apiUrl = "https://localhost:44308/api/";
  constructor(private httpClient : HttpClient) { }

  getProducts():Observable<listResponseModel<Product>> { 
    let newPath = this.apiUrl + "products/getall";
    return this.httpClient.get<listResponseModel<Product>>(newPath);
  }
 
  getProductsByCategory(categoryId:number):Observable<listResponseModel<Product>> { 
    let newPath = this.apiUrl + "products/getbycategory?id=" + categoryId;
    return this.httpClient.get<listResponseModel<Product>>(newPath);
  }

  add(product:Product): Observable<ResponseModel>{
    // const token = localStorage.getItem("token");
    // const httpOptions : Object = {headers : new HttpHeaders().set("Authorization", `Bearer ${token}` )}
    return this.httpClient.post<ResponseModel>(this.apiUrl + "products/add",product)

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44308/api/categories/getall"
  constructor(private httpClient : HttpClient) { }
  
  getCategories():Observable<listResponseModel<Category>> { 
    return this.httpClient.get<listResponseModel<Category>>(this.apiUrl);
  }
}

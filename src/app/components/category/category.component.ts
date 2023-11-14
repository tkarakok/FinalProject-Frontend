import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  
  categories : Category[]=[];
  currentCategory : Category;
  constructor (private categorysService : CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categorysService.getCategories().subscribe(response => {
      this.categories = response.data;
    });
  }

  setCurrentCategory(category:Category){
    this.currentCategory = category;
    console.log(this.currentCategory.categoryName);
  }

  getCurrentCategoryClass(category:Category){
      if(category == this.currentCategory){
        return "list-group-item active";
      }
      else
        return "list-group-item";
  }

}

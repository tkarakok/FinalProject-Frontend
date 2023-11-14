import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';


@Component({
  selector: 'app-root',
  standalone: true,
  providers:[
    ProductService,
    CategoryService
  ],
  imports: [
    RouterModule,
    CommonModule,
    RouterOutlet,
    CategoryComponent,
    NaviComponent,
    ProductComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Tunahan KARAKÖK";
  
}

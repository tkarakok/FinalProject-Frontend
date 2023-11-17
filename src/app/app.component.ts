import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ToastrModule} from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './intercepters/auth.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    RouterOutlet,
    CategoryComponent,
    NaviComponent,
    ProductComponent,
    VatAddedPipe,
    FilterPipePipe,
    ToastrModule,
    ReactiveFormsModule, 
    HttpClientModule,
  ],
  providers:[
    ProductService,
    CategoryService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Tunahan KARAKÖK";
  
}

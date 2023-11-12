import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ApplicationModule, NgModule } from '@angular/core';
import { CategoryComponent } from './app/components/category/category.component';
import { ProductComponent } from './app/components/product/product.component';
import { NaviComponent } from './app/components/navi/navi.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginComponent } from './login/login.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: 'category-page' , component: CategoryPageComponent},
  { path: 'product-page', component: ProductPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart' , component: CartComponent},
  { path: '' , component: HomepageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

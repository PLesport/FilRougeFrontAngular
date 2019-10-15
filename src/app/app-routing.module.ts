import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginComponent } from './login/login.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  { path: 'order-list' , component: OrderComponent},
  { path: 'user-list', component: UserListComponent},
  { path: 'product-list' , component: ProductListComponent},
  { path: 'add-product' , component: AddProductComponent},
  { path: 'admin-index' , component: AdminIndexComponent},
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

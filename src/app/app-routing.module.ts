import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUserProfileComponent } from './admin-user-profile/admin-user-profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UserHistoriqueComponent } from './user-historique/user-historique.component';
import { UserModifierComponent } from './user-modifier/user-modifier.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [

  { path: 'add-product' , component: AddProductComponent},
  { path: 'admin-index' , component: AdminIndexComponent},
  { path: 'admin-login' , component: AdminLoginComponent},
  { path: 'profile-detail' , component: AdminUserProfileComponent},
  { path: 'blog' , component: BlogComponent},
  { path: 'cart' , component: CartComponent},
  { path: 'category-page' , component: CategoryPageComponent},
  { path: 'checkout' , component: CheckoutComponent},
  { path: 'contact' , component: ContactComponent},
  { path: 'login', component: LoginComponent },
  { path: 'order-list' , component: OrderComponent},
  { path: 'product-list' , component: ProductListComponent},
  { path: 'product-page', component: ProductPageComponent },
  { path: 'register' , component: RegisterComponent},
  { path: 'transaction' , component: TransactionComponent},
  { path: 'user-dashboard' , component: UserDashboardComponent},
  { path: 'user-list', component: UserListComponent},
  { path: 'user-historique' , component: UserHistoriqueComponent},
  { path: 'user-modifier', component: UserModifierComponent},
  { path: 'user-search' , component: UserSearchComponent},
  { path: '' , component: HomepageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

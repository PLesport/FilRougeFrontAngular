import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUserProfileComponent } from './admin-user-profile/admin-user-profile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminPdtConfirmationComponent } from './admin-pdt-confirmation/admin-pdt-confirmation.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderComponent } from './order/order.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCoffeeComponent } from './product-coffee/product-coffee.component';
import { ProductTeaComponent } from './product-tea/product-tea.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RegisterComponent } from './register/register.component';
import { UserHistoriqueComponent } from './user-historique/user-historique.component';
import { UserModifierComponent } from './user-modifier/user-modifier.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [

  { path: 'add-product' , component: AddProductComponent, canActivate: [AuthGuardService]},
  { path: 'confirmation-product' , component: AdminPdtConfirmationComponent, canActivate: [AuthGuardService]},
  { path: 'admin-index' , component: AdminIndexComponent, canActivate: [AuthGuardService]},
  { path: 'profile-detail' , component: AdminUserProfileComponent, canActivate: [AuthGuardService]},
  { path: 'blog' , component: BlogComponent},
  { path: 'cart' , component: CartComponent, canActivate: [AuthGuardService]},
  { path: 'category-page' , component: CategoryPageComponent},
  { path: 'checkout' , component: CheckoutComponent, canActivate: [AuthGuardService]},
  { path: 'contact' , component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'order-list' , component: OrderComponent, canActivate: [AuthGuardService]},
  { path: 'product-list' , component: ProductListComponent},
  { path: 'product-coffee' , component: ProductCoffeeComponent},
  { path: 'product-tea' , component: ProductTeaComponent},
  { path: 'product-page/:id', component: ProductPageComponent },
  { path: 'register' , component: RegisterComponent},
  { path: 'user-dashboard' , component: UserDashboardComponent, canActivate: [AuthGuardService]},
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuardService]},
  { path: 'user-historique' , component: UserHistoriqueComponent, canActivate: [AuthGuardService]},
  { path: 'user-modifier', component: UserModifierComponent, canActivate: [AuthGuardService]},
  { path: 'user-search' , component: UserSearchComponent, canActivate: [AuthGuardService]},
  { path: '' , component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

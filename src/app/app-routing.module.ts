import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginComponent } from './login/login.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrderComponent } from './order/order.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';


const routes: Routes = [
  { path: 'add-product' , component: AddProductComponent },
  { path: 'profile-detail' , component: ProfileDetailComponent},
  { path: 'admin-index' , component: AdminIndexComponent},
  { path: 'admin-login' , component: AdminLoginComponent},
  { path: 'checkout' , component: CheckoutComponent},
  { path: 'contact' , component: ContactComponent},
  { path: 'dashboard' , component: DashboardComponent},
  { path: 'my-profile' , component: MyProfileComponent},
  { path: 'order' , component: OrderComponent},
  { path: 'register' , component: RegisterComponent},
  { path: 'search' , component: SearchComponent},
  { path: 'transcation' , component: TransactionComponent},
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

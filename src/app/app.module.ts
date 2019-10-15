import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPage404Component } from './error-page404/error-page404.component';
import { CartComponent } from './cart/cart.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoryComponent } from './category/category.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { OrderComponent } from './order/order.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StatsComponent } from './stats/stats.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeSettingComponent } from './theme-setting/theme-setting.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AddToCartModalComponent } from './add-to-cart-modal/add-to-cart-modal.component';
import { ProductCoffeeComponent } from './product-coffee/product-coffee.component';
import { ProductTeaComponent } from './product-tea/product-tea.component';
import { CategoryService } from './category.service';
import { from } from 'rxjs';
import { HistoriqueCommandeComponent } from './historique-commande/historique-commande.component';
import { ModifierProfileComponent } from './modifier-profile/modifier-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPage404Component,
    CartComponent,
    CategoryPageComponent,
    CheckoutComponent,
    ContactComponent,
    DashboardComponent,
    LoginComponent,
    ProductPageComponent,
    MyProfileComponent,
    RegisterComponent,
    SearchComponent,
    AddProductComponent,
    CategoryComponent,
    HomepageComponent,
    AdminLoginComponent,
    OrderComponent,
    ProductListComponent,
    StatsComponent,
    TransactionComponent,
    UserListComponent,
    ProfileDetailComponent,
    NavbarComponent,
    FooterComponent,
    ThemeSettingComponent,
    AdminIndexComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AddToCartModalComponent,
    ProductCoffeeComponent,
    ProductTeaComponent,
    HistoriqueCommandeComponent,
    ModifierProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent],
  exports: [ErrorPage404Component, CartComponent, CategoryPageComponent,
     CheckoutComponent, ContactComponent, DashboardComponent, LoginComponent,
      ProductPageComponent, MyProfileComponent, RegisterComponent, SearchComponent,
       AddProductComponent, CategoryComponent, HomepageComponent, AdminLoginComponent,
        OrderComponent, ProductListComponent, StatsComponent, TransactionComponent, UserListComponent,
         ProfileDetailComponent, NavbarComponent, FooterComponent, ThemeSettingComponent,
         AddToCartModalComponent, ProductCoffeeComponent, ProductTeaComponent]
})
export class AppModule { }

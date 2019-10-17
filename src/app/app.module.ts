import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AddToCartModalComponent } from './add-to-cart-modal/add-to-cart-modal.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminUserProfileComponent } from './admin-user-profile/admin-user-profile.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { CategoryService } from './category.service';
import { CategoryComponent } from './category/category.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorPage404Component } from './error-page404/error-page404.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCoffeeComponent } from './product-coffee/product-coffee.component';
import { ProductTeaComponent } from './product-tea/product-tea.component';
import { RatingComponent } from './rating/rating.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { StatsComponent } from './stats/stats.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ThemeSettingComponent } from './theme-setting/theme-setting.component';
import { UserHistoriqueComponent } from './user-historique/user-historique.component';
import { UserModifierComponent } from './user-modifier/user-modifier.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    AddToCartModalComponent,
    AdminLoginComponent,
    AdminIndexComponent,
    AdminHeaderComponent,
    AdminUserProfileComponent,
    AdminSidebarComponent,
    BlogComponent,
    CategoryComponent,
    CartComponent,
    CategoryPageComponent,
    CheckoutComponent,
    ContactComponent,
    ErrorPage404Component,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    MyProfileComponent,
    NavbarComponent,
    OrderComponent,
    ProductCoffeeComponent,
    ProductTeaComponent,
    ProductListComponent,
    ProductPageComponent,
    RatingComponent,
    RegisterComponent,
    SearchComponent,
    StatsComponent,
    TransactionComponent,
    ThemeSettingComponent,
    UserListComponent,
    UserHistoriqueComponent,
    UserModifierComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    UserSearchComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent],
  exports: [ErrorPage404Component, CartComponent, CategoryPageComponent,
     CheckoutComponent, ContactComponent, LoginComponent,
      ProductPageComponent, MyProfileComponent, RegisterComponent, SearchComponent,
       AddProductComponent, CategoryComponent, HomepageComponent, AdminLoginComponent,
        OrderComponent, ProductListComponent, StatsComponent, TransactionComponent, UserListComponent,
         NavbarComponent, FooterComponent, ThemeSettingComponent,
         AddToCartModalComponent, ProductCoffeeComponent, ProductTeaComponent, BlogComponent]
})
export class AppModule { }

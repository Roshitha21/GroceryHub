import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { OrderComponent } from './order/order.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ShowCustomersComponent } from './show-customers/show-customers.component';
import { MobilePipe } from './mobile.pipe';
import { CartComponent } from './cart/cart.component';
import { ViewAllOrdersComponent } from './view-all-orders/view-all-orders.component';
import { HomepageComponent } from './homepage/homepage.component';

import {SocialComponent } from './social/social.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProductsComponent } from './products/products.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { FaqComponent } from './faq/faq.component';
import { ReviewComponent } from './review/review.component';
import { ViewallreviewComponent } from './viewallreview/viewallreview.component';



const appRoot: Routes = [{ path: '', component: HomepageComponent },
{path:'homepage', component: HomepageComponent},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'products', component: ProductsComponent },
{ path: 'admin-page', component: AdminPageComponent },
{ path: 'show-customers', component: ShowCustomersComponent },
{ path: 'order', component: OrderComponent},
{ path: 'sell-product', component: SellProductComponent },
{ path: 'cart', component: CartComponent },
{ path: 'view-all-orders', component: ViewAllOrdersComponent },
{ path: 'social', component: SocialComponent },
{ path: 'my-products', component: MyProductsComponent },
{ path: 'order-history', component: OrderHistoryComponent},
{ path: 'faq', component: FaqComponent},
{ path: 'review', component: ReviewComponent},
{ path: 'viewallreview', component:ViewallreviewComponent },



];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    
    AdminPageComponent,
    ShowCustomersComponent,
    MobilePipe,
    CartComponent,
    ViewAllOrdersComponent,
    HomepageComponent,
    SocialComponent,
    OrderComponent,
    OrderHistoryComponent,
    ProductsComponent,
    SellProductComponent,
    MyProductsComponent,
    FaqComponent,
    ReviewComponent,
    ViewallreviewComponent    


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, HttpClientModule, RouterModule.forRoot(appRoot),

    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added



    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

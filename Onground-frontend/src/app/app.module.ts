import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SportsHomeComponent } from "./sports-home/sports-home.component";
import { MenubarModule } from "primeng/menubar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { FormComponent } from "./form/form.component";
import { DialogContentComponent } from "./dialog-content/dialog-content.component";

import {
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatDialogModule,
  MatSelectModule
} from "@angular/material";
import { MusicHomeComponent } from "./music-home/music-home.component";
import { MusicShopComponent } from "./music-shop/music-shop.component";
import { SportShopComponent } from "./sport-shop/sport-shop.component";
import { RegisterComponent } from "./register/register.component";
import { ItemComponent } from "./item/item.component";
import { ProductsComponent } from "./products/products.component";
import { ProductspecificComponent } from "./productspecific/productspecific.component";
import { CartComponent } from "./cart/cart.component";
import { AccountComponent } from "./account/account.component";
import { OrdersComponent } from "./orders/orders.component";
import { PaymentComponent } from "./payment/payment.component";

const appRoutes: Routes = [
  { path: "home", component: SportsHomeComponent },
  // { path: "home", component: HomePageComponent },
  { path: "form", component: FormComponent },
  // { path: "signup", component: SignupComponent },
  { path: "musichome", component: MusicHomeComponent },
  { path: "musicshop", component: MusicShopComponent },
  { path: "shop", component: SportShopComponent },
  { path: "register", component: RegisterComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "login", component: LoginComponent },
  { path: "item", component: ItemComponent },
  { path: "accounts", component: AccountComponent },
  { path: ":name/products", component: ProductsComponent },
  { path: "orders", component: OrdersComponent },
  { path: "payment", component: PaymentComponent },
  {
    path: ":name/products/productspecific",
    component: ProductspecificComponent
  },
  {
    path: ":name/products/productspecific/cart",
    component: CartComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SportsHomeComponent,
    NavbarComponent,
    HomePageComponent,
    LoginComponent,
    DialogContentComponent,
    FormComponent,
    SignupComponent,
    MusicHomeComponent,
    MusicShopComponent,
    SportShopComponent,
    RegisterComponent,
    ItemComponent,
    ProductsComponent,
    ProductspecificComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}

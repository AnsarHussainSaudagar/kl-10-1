import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { MainCardsComponent } from './main-cards/main-cards.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { HighlighDirective } from './highligh.directive';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { authGuard } from './auth.guard';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AddressesComponent } from './addresses/addresses.component';

const appRoutes : Routes = [
  {path: 'about-us', component: AboutUsComponent, title: 'About Us', canActivate: [authGuard]},
  {path: '', component: MainCardsComponent, title: "Home"},
  {path: 'product/:product_id', component: ProductComponent, title: "Product"},
  {path: 'my-profile', component: MyProfileComponent, canActivate: [authGuard], 
    children: [
    {path: 'personal-details', component: PersonalDetailsComponent},
    {path: 'addresses', component: AddressesComponent},
  ]},
  {path: 'not-allowed', component: NotAllowedComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: "**", redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainCardsComponent,
    CustomPipePipe,
    AddProductComponent,
    HighlighDirective,
    AboutUsComponent,
    ProductComponent,
    MyProfileComponent,
    NotAllowedComponent,
    NotFoundComponent,
    PersonalDetailsComponent,
    AddressesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

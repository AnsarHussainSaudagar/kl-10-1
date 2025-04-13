import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddressesComponent } from './addresses/addresses.component';
import { authGuard } from './auth.guard';
import { MainCardsComponent } from './main-cards/main-cards.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProductComponent } from './product/product.component';

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
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }

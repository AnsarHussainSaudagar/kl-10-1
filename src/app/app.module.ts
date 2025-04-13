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
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

const appRoutes : Routes = [
  {path: 'about-us', component: AboutUsComponent},
  {path: '', component: MainCardsComponent},
  {path: 'product', component: ProductComponent}
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

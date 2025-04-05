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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainCardsComponent,
    CustomPipePipe,
    AddProductComponent,
    HighlighDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AppComponent, ProductsComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

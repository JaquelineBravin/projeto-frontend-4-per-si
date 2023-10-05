import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, HeaderComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

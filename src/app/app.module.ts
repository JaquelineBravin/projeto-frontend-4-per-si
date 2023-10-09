import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { ListComponent } from './components/list/list.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
<<<<<<< HEAD
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
=======
import {MatRadioModule} from '@angular/material/radio';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

>>>>>>> bbcfef2ad4eb0c4ce7973b71ffafa8a069b11beb

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
<<<<<<< HEAD
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
=======
    MatRadioModule,
    NgFor,
    MatSelectModule
>>>>>>> bbcfef2ad4eb0c4ce7973b71ffafa8a069b11beb
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryCreateComponent } from './category/category-create.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CreditorModule } from './creditor/creditor.module';
import { CategoryModule } from './category/category.module';
import { PayableModule } from './payable/payable.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CreditorModule,
    CategoryModule,
    PayableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

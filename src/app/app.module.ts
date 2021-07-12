import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryCreateComponent } from './category/category-create.component';
import { CreditorCreateComponent } from './creditor/creditor-create.component';
import { CreditorListComponent } from './creditor/creditor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditorCreateComponent,
    CategoryCreateComponent,
    CreditorListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

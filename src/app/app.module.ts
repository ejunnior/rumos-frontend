import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryCreateComponent } from './category/category-create.component';
import { CreditorCreateComponent } from './creditor/creditor-create.component';
import { CreditorListComponent } from './creditor/creditor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreditorCreateComponent,
    CategoryCreateComponent,
    CreditorListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'creditor', component: CreditorListComponent },
      { path: 'creditor/create', component: CreditorCreateComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

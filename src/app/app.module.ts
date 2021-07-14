import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryCreateComponent } from './category/category-create.component';
import { CreditorCreateComponent } from './creditor/creditor-create.component';
import { CreditorListComponent } from './creditor/creditor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CreditorDeleteComponent } from './creditor/creditor-delete.component';
import { CreditorDetailComponent } from './creditor/creditor-detail.component';
import { CreditorEditComponent } from './creditor/creditor-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditorCreateComponent,
    CategoryCreateComponent,
    CreditorListComponent,
    CreditorDeleteComponent,
    CreditorDetailComponent,
    CreditorEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'creditor', component: CreditorListComponent },
      { path: 'creditor/create', component: CreditorCreateComponent },
      { path: 'creditor/edit/:id', component: CreditorEditComponent },
      { path: 'creditor/delete/:id', component: CreditorDeleteComponent },
      { path: 'creditor/detail/:id', component: CreditorDetailComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

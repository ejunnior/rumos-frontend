import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreditorCreateComponent } from "./creditor-create.component";
import { CreditorDeleteComponent } from "./creditor-delete.component";
import { CreditorDetailComponent } from "./creditor-detail.component";
import { CreditorEditComponent } from "./creditor-edit.component";
import { CreditorListComponent } from "./creditor-list.component";

const routes: Routes = [
    { path: 'creditor', component: CreditorListComponent },
    { path: 'creditor/create', component: CreditorCreateComponent },
    { path: 'creditor/edit/:id', component: CreditorEditComponent },
    { path: 'creditor/delete/:id', component: CreditorDeleteComponent },
    { path: 'creditor/detail/:id', component: CreditorDetailComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule
    ]
})
export class CreditorRoutingModule { }
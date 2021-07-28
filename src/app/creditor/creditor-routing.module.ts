import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationGuard } from "../authentication/authentication.guard";
import { CreditorCreateComponent } from "./creditor-create.component";
import { CreditorDeleteComponent } from "./creditor-delete.component";
import { CreditorDetailComponent } from "./creditor-detail.component";
import { CreditorEditComponent } from "./creditor-edit.component";
import { CreditorListComponent } from "./creditor-list.component";

const routes: Routes = [
    { 
        path: 'creditor', 
        component: CreditorListComponent, 
        canActivate: [AuthenticationGuard]
    },
    { 
        path: 'creditor/create', 
        component: CreditorCreateComponent, 
        canActivate: [AuthenticationGuard] 
    },
    { 
        path: 'creditor/edit/:id', 
        component: CreditorEditComponent, 
        canActivate: [AuthenticationGuard] 
    },
    { 
        path: 'creditor/delete/:id', 
        component: CreditorDeleteComponent, 
        canActivate: [AuthenticationGuard] 
    },
    { 
        path: 'creditor/detail/:id', 
        component: CreditorDetailComponent, 
        canActivate: [AuthenticationGuard] 
    }
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
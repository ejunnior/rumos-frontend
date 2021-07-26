import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { CreditorCreateComponent } from "./creditor-create.component";
import { CreditorDeleteComponent } from "./creditor-delete.component";
import { CreditorDetailComponent } from "./creditor-detail.component";
import { CreditorEditComponent } from "./creditor-edit.component";
import { CreditorListComponent } from "./creditor-list.component";
import { CreditorRoutingModule } from "./creditor-routing.module";

@NgModule({
    imports: [
        CoreModule,
        CreditorRoutingModule
    ],
    declarations:[
        CreditorCreateComponent,
        CreditorListComponent,
        CreditorDeleteComponent,
        CreditorDetailComponent,
        CreditorEditComponent
    ]
})
export class CreditorModule { }
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PayableCreateComponent } from "./payable-create.component";
import { PayableListComponent } from "./payable-list.component";

const routes: Routes = [
    { path: 'payable', component: PayableListComponent },
    { path: 'payable/create', component: PayableCreateComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule
    ]
})
export class PayableRoutingModule { }
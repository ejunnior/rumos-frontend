import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PayableListComponent } from "./payable-list.component";

const routes: Routes = [
    { path: 'payable', component: PayableListComponent },
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
import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { PayableCreateComponent } from "./payable-create.component";
import { PayableListComponent } from "./payable-list.component";
import { PayableRoutingModule } from "./payable-routing.module";

@NgModule({
    imports: [
        CoreModule,
        PayableRoutingModule
    ],
    declarations:[
        PayableListComponent,
        PayableCreateComponent
    ]
})
export class PayableModule { }
import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { PayableListComponent } from "./payable-list.component";
import { PayableRoutingModule } from "./payable-routing.module";

@NgModule({
    imports: [
        CoreModule,
        PayableRoutingModule
    ],
    declarations:[
        PayableListComponent
    ]
})
export class PayableModule { }
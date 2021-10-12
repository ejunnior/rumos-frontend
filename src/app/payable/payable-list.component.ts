import { Component, OnInit } from "@angular/core";
import { PayableGetModel } from "./payable-get.model";
import { PayableService } from "./payable.service";

@Component({
    templateUrl:'./payable-list.component.html'
})

export class PayableListComponent implements OnInit { 
    pageTitle: string = "Payable List";
    payables: PayableGetModel[] = [];

    constructor(private payableService: PayableService)
    {     
    }

    ngOnInit(): void {
        this.payableService
            .getPayable()
            .subscribe( {
                next: data => this.payables = data.result
            });
    }
}
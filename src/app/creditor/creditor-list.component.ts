import { Component, OnInit } from "@angular/core";
import { CredtiorGetModel } from "./creditor-get.model";
import { CreditorService } from "./creditor.service";

@Component({
    selector:'fm-creditorlist',
    templateUrl:'./creditor-list.component.html'
})

export class CreditorListComponent implements OnInit { 
    pageTitle: string = "Creditor List";
    creditors: CredtiorGetModel[] = [];

    constructor(private creditorService: CreditorService)
    {     
    }

    ngOnInit(): void {
      this.creditors = this.creditorService.getCreditor();  
    }
}
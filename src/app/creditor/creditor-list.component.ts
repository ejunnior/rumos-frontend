import { Component, OnInit } from "@angular/core";
import { CreditorGetModel } from "./creditor-get.model";
import { CreditorService } from "./creditor.service";

@Component({
    templateUrl:'./creditor-list.component.html'
})

export class CreditorListComponent implements OnInit { 
    pageTitle: string = "Creditor List";
    creditors: CreditorGetModel[] = [];

    constructor(private creditorService: CreditorService)
    {     
    }

    ngOnInit(): void {
        this.creditorService
            .getCreditor()
            .subscribe( {
                next: data => this.creditors = data.result
            });
            
    }
}
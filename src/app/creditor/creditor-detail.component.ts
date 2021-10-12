import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CreditorGetByIdModel } from "./creditor-getbyid.model";
import { CreditorService } from "./creditor.service";

@Component({
    templateUrl:'./creditor-detail.component.html'
})

export class CreditorDetailComponent implements OnInit {
    pageTitle: string = "Creditor Detail";
    creditorId !: number;
    creditor !: CreditorGetByIdModel;

    constructor(
        private creditorService: CreditorService,
        private activeRoute : ActivatedRoute) {

        }

    ngOnInit(): void {
        this.creditorId = Number(this.activeRoute
            .snapshot.paramMap.get('id')); 
        
        this.creditorService
            .getCreditorById(this.creditorId)
            .subscribe({
                next: data => this.creditor = data.result
            });
    }


}
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CreditorGetByIdModel } from "./creditor-getbyid.model";
import { CreditorService } from "./creditor.service";

@Component({
    templateUrl: './creditor-delete.component.html'
})

export class CreditorDeleteComponent implements OnInit {
    pageTitle: string = "Delete Creditor";
    creditorId !: number;
    creditor !: CreditorGetByIdModel;
    formDelete !: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private creditorService: CreditorService,
        private router: Router,
        private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.formDelete = this
            .formBuilder.group({});        

        this.creditorId = Number(this.route
            .snapshot.paramMap.get('id')); 
        
        this.creditorService
            .getCreditorById(this.creditorId)
            .subscribe({
                next: data => this.creditor = data
            });
    }

    delete(): void {
        this.creditorService.deleteCreditor(this.creditorId)
            .subscribe({
                next: () => this.onDeleteCompleted()                
            });
    }

    onDeleteCompleted() : void {
        this.router.navigate(['/creditor']);
    }
}
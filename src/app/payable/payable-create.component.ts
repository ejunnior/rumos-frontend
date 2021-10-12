import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CreditorGetModel } from "../creditor/creditor-get.model";
import { CreditorService } from "../creditor/creditor.service";
import { PayableCreateModel } from "./payable-create.model";
import { PayableService } from "./payable.service";

@Component({
    templateUrl: './payable-create.component.html'
})

export class PayableCreateComponent implements OnInit {
    pageTitle: string = "Create Payable";
    formCreate !: FormGroup;
    model !: PayableCreateModel;
    creditors !: CreditorGetModel[];

    constructor(
        private formBuilder: FormBuilder,
        private payableService: PayableService,
        private router: Router,
        private creditorService: CreditorService) { 
    }
    
    ngOnInit(): void {
        this.formCreate = this.formBuilder.group({
            creditorId : [
                null,
                [
                    Validators.required
                ]
            ]
        });

        this.creditorService
            .getCreditor()
            .subscribe({
                next: data => { this.creditors = data.result }                
            });
    }

    create() {
        if(this.formCreate.valid) {
            this.model = { ...this.model, ...this.formCreate.value};
        
            this.payableService.createPayable(this.model)
                .subscribe({
                    next: () => this.onCreateComplete()
                })
        }
     }

     onCreateComplete() {
         this.formCreate.reset();
         this.router.navigate(['/payable']);
     }
}
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { CreditorCreateModel } from "./creditor-create.model";
import { CreditorService } from "./creditor.service";

@Component({
    templateUrl: './creditor-create.component.html'
})

export class CreditorCreateComponent implements OnInit {
    pageTitle: string = "Create Creditor";
    formCreate !: FormGroup;
    model !: CreditorCreateModel;

    constructor(
        private formBuilder: FormBuilder,
        private creditorService: CreditorService,
        private router: Router) { 
    }
    
    ngOnInit(): void {
        this.formCreate = this.formBuilder.group({
            creditorName : ''            
        });
    }

    create() {
        this.model = { ...this.model, ...this.formCreate.value};
        
        this.creditorService.createCreditor(this.model)
            .subscribe({
                next: () => this.onCreateComplete()
            })
     }

     onCreateComplete() {
         this.formCreate.reset();
         this.router.navigate(['/creditor']);
     }
}
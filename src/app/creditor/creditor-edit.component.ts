import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CreditorEditModel } from "./creditor-edit.model";
import { CreditorGetByIdModel } from "./creditor-getbyid.model";
import { CreditorService } from "./creditor.service";

@Component({
    templateUrl: './creditor-edit.component.html'
})

export class CreditorEditComponent {
    pageTitle: string = "Edit Creditor";
    formEdit !: FormGroup;
    creditorId !: number;
    creditor !: CreditorEditModel;

    constructor(
        private creditorService: CreditorService,
        private activeRoute : ActivatedRoute,
        private formBuilder : FormBuilder,
        private router : Router) {

        }

    ngOnInit(): void {
        this.formEdit = this.formBuilder.group({
            name : ''            
        });

        this.creditorId = Number(this.activeRoute
            .snapshot.paramMap.get('id')); 
        
        this.creditorService
            .getCreditorById(this.creditorId)
            .subscribe({
                next: data => this.displayData(data.result)
            });
    }    

    edit(){
        this.creditor = { ...this.creditor, ...this.formEdit.value};
        this.creditor.id = this.creditorId;
        this.creditorService.editCreditor(this.creditor)
            .subscribe({
                next: () => this.onEditComplete()
            });

    }

    onEditComplete() {
        this.formEdit.reset();
        this.router.navigate(['/creditor']);
    }


    displayData(creditor : CreditorGetByIdModel){
        this.formEdit.reset();
        this.formEdit.patchValue({
            name: creditor.name
        });
    }

}
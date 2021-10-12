import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CategoryCreateModel } from "./category-create.model";
import { CategoryService } from "./category.service";

@Component({
    templateUrl: './category-create.component.html'
})

export class CategoryCreateComponent implements OnInit {
    pageTitle: string = "Create Category";
    formCreate !: FormGroup;
    model !: CategoryCreateModel;

    constructor(
        private formBuilder: FormBuilder,
        private categoryService: CategoryService,
        private router: Router) { 
    }
    
    ngOnInit(): void {
        this.formCreate = this.formBuilder.group({
            categoryName : [
                '',
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(80)
                ]
            ]
        });
    }

    create() {
        if(this.formCreate.valid) {
            this.model = { ...this.model, ...this.formCreate.value};
            this.categoryService.createCategory(this.model)
                .subscribe({
                    next: () => this.onCreateComplete()
                })
        }
     }

     onCreateComplete() {
         this.formCreate.reset();
         this.router.navigate(['/category']);
     }
}
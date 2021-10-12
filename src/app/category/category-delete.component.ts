import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryGetByIdModel } from "./category-getbyid.model";
import { CategoryService } from "./category.service";

@Component({
    templateUrl: './category-delete.component.html'
})

export class CategoryDeleteComponent implements OnInit {
    pageTitle: string = "Delete Category";
    categoryId !: number;
    category !: CategoryGetByIdModel;
    formDelete !: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private categoryService: CategoryService,
        private router: Router,
        private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.formDelete = this
            .formBuilder.group({});        

        this.categoryId = Number(this.route
            .snapshot.paramMap.get('id')); 
        
        this.categoryService
            .getCategoryById(this.categoryId)
            .subscribe({
                next: data => this.category = data.result
            });
    }

    delete(): void {
        this.categoryService.deleteCategory(this.categoryId)
            .subscribe({
                next: () => this.onDeleteCompleted()                
            });
    }

    onDeleteCompleted() : void {
        this.router.navigate(['/category']);
    }
}
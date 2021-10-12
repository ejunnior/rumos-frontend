import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryGetByIdModel } from "./category-getbyid.model";
import { CategoryService } from "./category.service";

@Component({
    templateUrl:'./category-detail.component.html'
})

export class CategoryDetailComponent implements OnInit {
    pageTitle: string = "Category Detail";
    categoryId !: number;
    category !: CategoryGetByIdModel;

    constructor(
        private categoryService: CategoryService,
        private activeRoute : ActivatedRoute) {

        }

    ngOnInit(): void {
        this.categoryId = Number(this.activeRoute
            .snapshot.paramMap.get('id')); 
        
        this.categoryService
            .getCategoryById(this.categoryId)
            .subscribe({
                next: data => this.category = data.result
            });
    }


}
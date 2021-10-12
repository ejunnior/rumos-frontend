import { Component, OnInit } from "@angular/core";
import { CategoryGetModel } from "./category-get.model";
import { CategoryService } from "./category.service";

@Component({
    templateUrl:'./category-list.component.html'
})

export class CategoryListComponent implements OnInit { 
    pageTitle: string = "Category List";
    categories: CategoryGetModel[] = [];

    constructor(private categoryService: CategoryService)
    {     
    }

    ngOnInit(): void {
        this.categoryService
            .getCategory()
            .subscribe( {
                next: data => this.categories = data.result
            });
            
    }
}
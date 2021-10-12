import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryEditModel } from "./category-edit.model";
import { CategoryGetByIdModel } from "./category-getbyid.model";
import { CategoryService } from "./category.service";

@Component({
    templateUrl: './category-edit.component.html'
})

export class CategoryEditComponent {
    pageTitle: string = "Edit Category";
    formEdit !: FormGroup;
    categoryId !: number;
    category !: CategoryEditModel;

    constructor(
        private categoryService: CategoryService,
        private activeRoute : ActivatedRoute,
        private formBuilder : FormBuilder,
        private router : Router) {

        }

    ngOnInit(): void {
        this.formEdit = this.formBuilder.group({
            categoryName : ''            
        });

        this.categoryId = Number(this.activeRoute
            .snapshot.paramMap.get('id')); 
        
        this.categoryService
            .getCategoryById(this.categoryId)
            .subscribe({
                next: data => this.displayData(data.result)
            });
    }    

    edit(){
        this.category = { ...this.category, ...this.formEdit.value};
        this.category.id = this.categoryId;
        this.categoryService.editCategory(this.category)
            .subscribe({
                next: () => this.onEditComplete()
            });

    }

    onEditComplete() {
        this.formEdit.reset();
        this.router.navigate(['/category']);
    }


    displayData(category : CategoryGetByIdModel){
        this.formEdit.reset();
        this.formEdit.patchValue({
            categoryName: category.name
        });
    }

}
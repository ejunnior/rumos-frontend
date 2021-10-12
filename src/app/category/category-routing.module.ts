import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryCreateComponent } from "./category-create.component";
import { CategoryDeleteComponent } from "./category-delete.component";
import { CategoryDetailComponent } from "./category-detail.component";
import { CategoryEditComponent } from "./category-edit.component";
import { CategoryListComponent } from "./category-list.component";

const routes: Routes = [
    { path: 'category', component: CategoryListComponent },
    { path: 'category/create', component: CategoryCreateComponent },
    { path: 'category/edit/:id', component: CategoryEditComponent },
    { path: 'category/delete/:id', component: CategoryDeleteComponent },
    { path: 'category/detail/:id', component: CategoryDetailComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule
    ]
})
export class CategoryRoutingModule { }
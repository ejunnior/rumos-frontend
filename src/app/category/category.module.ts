import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { CategoryCreateComponent } from "./category-create.component";
import { CategoryDeleteComponent } from "./category-delete.component";
import { CategoryDetailComponent } from "./category-detail.component";
import { CategoryEditComponent } from "./category-edit.component";
import { CategoryListComponent } from "./category-list.component";
import { CategoryRoutingModule } from "./category-routing.module";

@NgModule({
    imports: [
        CoreModule,
        CategoryRoutingModule
    ],
    declarations:[
        CategoryCreateComponent,
        CategoryListComponent,
        CategoryDeleteComponent,
        CategoryDetailComponent,
        CategoryEditComponent
    ]
})
export class CategoryModule { }
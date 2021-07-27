import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { CategoryCreateComponent } from "./category-create.component";

@NgModule({
    imports: [
        CoreModule
    ],
    declarations: [
        CategoryCreateComponent        
    ]
})
export class CategoryModule { }
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Envelope } from "../core/envelope";
import { CategoryCreateModel } from "./category-create.model";
import { CategoryEditModel } from "./category-edit.model";
import { CategoryGetModel } from "./category-get.model";
import { CategoryGetByIdModel } from "./category-getbyid.model";

@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    
    private apiUrl = "https://localhost:44384/api/v1/category";
    
    constructor(private httpClient: HttpClient) {

    }
    
    getCategory() : Observable<Envelope<CategoryGetModel[]>> {
        return this.httpClient.get<Envelope<CategoryGetModel[]>>(this.apiUrl);
    }  

    getCategoryById(id: number) : Observable<Envelope<CategoryGetByIdModel>> {
        return this.httpClient.get<Envelope<CategoryGetByIdModel>>(this.apiUrl + '/' + id);
    }

    createCategory(model : CategoryCreateModel) : Observable<CategoryCreateModel> {
        return this.httpClient.post<CategoryCreateModel>(this.apiUrl, model);
    }

    editCategory(model: CategoryEditModel) : Observable<CategoryEditModel> {
        return this.httpClient.put<CategoryEditModel>(this.apiUrl + '/' + model.id ,model);
    }

    deleteCategory(id: number) : Observable<any> {
        return this.httpClient.delete<any>(this.apiUrl + '/' + id);
    }
}
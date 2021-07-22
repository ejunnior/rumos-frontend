import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreditorCreateModel } from "./creditor-create.model";
import { CreditorEditModel } from "./creditor-edit.model";
import { CreditorGetModel } from "./creditor-get.model";
import { CreditorGetByIdModel } from "./creditor-getbyid.model";

@Injectable({
    providedIn: 'root'
})

export class CreditorService {
    
    private apiUrl = "https://localhost:44384/creditor";
    
    constructor(private httpClient: HttpClient) {

    }
    
    getCreditor() : Observable<CreditorGetModel[]> {
        return this.httpClient.get<CreditorGetModel[]>(this.apiUrl);
    }  

    getCreditorById(id: number) : Observable<CreditorGetByIdModel> {
        return this.httpClient.get<CreditorGetByIdModel>(this.apiUrl + '/' + id);
    }

    createCreditor(model : CreditorCreateModel) : Observable<CreditorCreateModel> {
        return this.httpClient.post<CreditorCreateModel>(this.apiUrl, model);
    }

    editCreditor(model: CreditorEditModel) : Observable<CreditorEditModel> {
        return this.httpClient.put<CreditorEditModel>(this.apiUrl + '/' + model.id ,model);
    }

    deleteCreditor(id: number) : Observable<any> {
        return this.httpClient.delete<any>(this.apiUrl + '/' + id);
    }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Envelope } from "../core/envelope";
import { CreditorCreateModel } from "./creditor-create.model";
import { CreditorEditModel } from "./creditor-edit.model";
import { CreditorGetModel } from "./creditor-get.model";
import { CreditorGetByIdModel } from "./creditor-getbyid.model";

@Injectable({
    providedIn: 'root'
})

export class CreditorService {
    
    private apiUrl = "https://localhost:44384/api/v1/creditor";
    
    constructor(private httpClient: HttpClient) {

    }
    
    getCreditor() : Observable<Envelope<CreditorGetModel[]>> {
        return this.httpClient.get<Envelope<CreditorGetModel[]>>(this.apiUrl);
    }  

    getCreditorById(id: number) : Observable<Envelope<CreditorGetByIdModel>> {
        return this.httpClient.get<Envelope<CreditorGetByIdModel>>(this.apiUrl + '/' + id);
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
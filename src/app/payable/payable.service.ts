import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Envelope } from "../core/envelope";
import { PayableCreateModel } from "./payable-create.model";
import { PayableEditModel } from "./payable-edit.model";
import { PayableGetModel } from "./payable-get.model";
import { PayableGetByIdModel } from "./payable-getbyid.model";

@Injectable({
    providedIn: 'root'
})

export class PayableService {
    
    private apiUrl = "https://localhost:44384/api/v1/payable";
    
    constructor(private httpClient: HttpClient) {

    }
    
    getPayable() : Observable<Envelope<PayableGetModel[]>> {
        return this.httpClient.get<Envelope<PayableGetModel[]>>(this.apiUrl);
    }  

    getPayableById(id: number) : Observable<Envelope<PayableGetByIdModel>> {
        return this.httpClient.get<Envelope<PayableGetByIdModel>>(this.apiUrl + '/' + id);
    }

    createPayable(model : PayableCreateModel) : Observable<PayableCreateModel> {
        return this.httpClient.post<PayableCreateModel>(this.apiUrl, model);
    }

    editPayable(model: PayableEditModel) : Observable<PayableEditModel> {
        return this.httpClient.put<PayableEditModel>(this.apiUrl + '/' + model.id ,model);
    }

    deletePayable(id: number) : Observable<any> {
        return this.httpClient.delete<any>(this.apiUrl + '/' + id);
    }
}
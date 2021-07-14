import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreditorGetModel } from "./creditor-get.model";

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
}
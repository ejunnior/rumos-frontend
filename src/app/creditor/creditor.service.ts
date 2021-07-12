import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CredtiorGetModel } from "./creditor-get.model";

@Injectable({
    providedIn: 'root'
})

export class CreditorService {
    
    private apiUrl = "https://localhost:44384/creditor"
    
    constructor(private httpClient: HttpClient) {

    }
    
    getCreditor() : Observable<CredtiorGetModel[]> {
        return this.httpClient.get<CredtiorGetModel[]>(this.apiUrl);
    }  
}
import { Injectable } from "@angular/core";
import { CredtiorGetModel } from "./creditor-get.model";

@Injectable({
    providedIn: 'root'
})

export class CreditorService {
    getCreditor() : CredtiorGetModel[] {
        return [
            {
                "id":1,
                "name":"Edp"
            },
            {
                "id":2,
                "name":"Nos"
            },
            {
                "id":3,
                "name":"Aguas do Porto"
            },
            {
                "id":4,
                "name":"Meo"
            },
        ]        
    }  
}
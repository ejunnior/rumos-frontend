import { Component } from "@angular/core";

@Component({
    selector:'fm-creditorlist',
    templateUrl:'./creditor-list.component.html'
})

export class CreditorListComponent{ 
    pageTitle: string = "Creditor List";
    creditors: any[] = [
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
        }
    ];
}
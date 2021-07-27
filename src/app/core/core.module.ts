import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class CoreModule { }
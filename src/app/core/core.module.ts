import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DateFormatPipe } from "./date-format.pipe";

@NgModule({
    declarations: [
        DateFormatPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        DateFormatPipe
    ]
})
export class CoreModule { }
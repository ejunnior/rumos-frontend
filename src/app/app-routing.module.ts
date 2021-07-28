import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizationInterceptor } from "./authentication/authorization.interceptor";

const routes : Routes = []

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthorizationInterceptor,
        multi: true
      }],
})
export class AppRoutingModule { }
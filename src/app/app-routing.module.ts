import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent, Outlet } from "@nativescript/angular";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,

        // loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
    }

    // {
    //     path: "browse",
    //     component: HomeComponent
    // },
    // {
    //     path: "search",
    //     component: HomeComponent
    // }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

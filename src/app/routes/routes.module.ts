import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgxComponent } from "./ngx/ngx.component";
import { NgxLazyLoadComponent } from "./ngx-lazy-load/ngx-lazy-load.component";
import { NgxSafePipesComponent } from "./ngx-safe-pipes/ngx-safe-pipes.component";
import { NgxSafePipesModule } from "projects/ngx-safe-pipes/src/public-api";
import { MarkdownModule } from "ngx-markdown";
import { CoreModule } from "../core/core.module";

const routes: Routes = [
  { path: "", redirectTo: "ngx", pathMatch: "full" },
  { path: "ngx", component: NgxComponent },
  { path: "ngx-lazy-load", component: NgxLazyLoadComponent },
  { path: "ngx-safe-pipes", component: NgxSafePipesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MarkdownModule.forChild(),
    NgxSafePipesModule,
    CoreModule,
  ],
  exports: [RouterModule],
  declarations: [NgxComponent, NgxSafePipesComponent, NgxLazyLoadComponent],
})
export class RoutesModule {}

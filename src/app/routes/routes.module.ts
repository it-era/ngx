import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgxLazyLoadComponent } from "./ngx-lazy-load/ngx-lazy-load.component";
import { NgxSafePipesComponent } from "./ngx-safe-pipes/ngx-safe-pipes.component";
import { NgxSafePipesModule } from "projects/ngx-safe-pipes/src/public-api";
import { MarkdownModule } from "ngx-markdown";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "ngx-lazy-load", component: NgxLazyLoadComponent },
  { path: "ngx-safe-pipes", component: NgxSafePipesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MarkdownModule.forChild(),
    NgxSafePipesModule,
  ],
  exports: [RouterModule],
  declarations: [HomeComponent, NgxSafePipesComponent, NgxLazyLoadComponent],
})
export class RoutesModule {}

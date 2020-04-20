import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { BannerComponent } from "./banner/banner.component";

@NgModule({
  imports: [RouterModule],
  exports: [MenuComponent, BannerComponent],
  declarations: [MenuComponent, BannerComponent],
})
export class CoreModule {}

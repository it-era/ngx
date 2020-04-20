import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu/menu.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [RouterModule],
  exports: [MenuComponent],
  declarations: [MenuComponent],
})
export class CoreModule {}

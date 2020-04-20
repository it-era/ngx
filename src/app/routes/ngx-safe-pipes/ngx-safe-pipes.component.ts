import { Component } from "@angular/core";
import README from "raw-loader!../../../../projects/ngx-safe-pipes/README.md";

@Component({
  selector: "ngx-safe-pipes",
  templateUrl: "./ngx-safe-pipes.component.html",
  styleUrls: ["./ngx-safe-pipes.component.sass"],
})
export class NgxSafePipesComponent {
  readme = README;
}

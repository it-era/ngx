import { Component } from "@angular/core";
import README from "raw-loader!../../../../README.md";

@Component({
  selector: "ngx",
  templateUrl: "./ngx.component.html",
  styleUrls: ["./ngx.component.sass"],
})
export class NgxComponent {
  readme = README;
}

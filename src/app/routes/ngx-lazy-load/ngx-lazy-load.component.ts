import { Component } from "@angular/core";
import README from "raw-loader!../../../../projects/ngx-lazy-load/README.md";

@Component({
  selector: "ngx-lazy-load",
  templateUrl: "./ngx-lazy-load.component.html",
  styleUrls: ["./ngx-lazy-load.component.sass"],
})
export class NgxLazyLoadComponent {
  readme = README;
}

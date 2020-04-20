import { BrowserModule } from "@angular/platform-browser";
import { NgModule, SecurityContext } from "@angular/core";
import { MarkdownModule } from "ngx-markdown";

import { RoutesModule } from "./routes/routes.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import "clipboard";

import "prismjs";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/components/prism-css";
import "prismjs/components/prism-typescript";

import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutesModule,
    CoreModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

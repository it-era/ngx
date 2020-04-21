import { NgModule, ErrorHandler, Injectable } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import * as Sentry from "@sentry/browser";
import { MarkdownModule } from "ngx-markdown";
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
import { RoutesModule } from "./routes/routes.module";
import { AppComponent } from "./app.component";

Sentry.init({
  dsn:
    "https://42032576a408443bb953257dbf573264@o219666.ingest.sentry.io/5207845",
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    const eventId = Sentry.captureException(error.originalError || error);
    // Sentry.showReportDialog({ eventId });
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    HttpClientModule,
    RoutesModule,
    CoreModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}

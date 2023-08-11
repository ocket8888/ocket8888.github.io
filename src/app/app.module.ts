import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

/**
 * AppModule is the only module in this simple app.
 */
@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
})
export class AppModule { }

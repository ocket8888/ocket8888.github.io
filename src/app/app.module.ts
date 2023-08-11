import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SkillsComponent } from "./skills/skills.component";

/**
 * AppModule is the only module in this simple app.
 */
@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		SkillsComponent
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		HttpClientModule,
		MatButtonModule,
		MatCardModule,
		MatExpansionModule,
		MatIconModule,
		MatListModule,
		MatTabsModule,
	],
	providers: [],
})
export class AppModule { }

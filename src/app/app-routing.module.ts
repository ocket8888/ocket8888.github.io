import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [];

/**
 * AppRoutingModule controls routing for the base app (and in the case of this
 * simple app, that's the whole of its routing).
 */
@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }

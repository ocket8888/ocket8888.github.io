import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { GitHubAPIService, Repository } from "./git-hub-api.service";

/**
 * The webapp root.
 */
@Component({
	selector: "ocket8888-root",
	styleUrls: ["./app.component.scss"],
	templateUrl: "./app.component.html",
})
export class AppComponent {

	public readonly repos: Observable<Repository[]>;

	constructor(ghAPI: GitHubAPIService) {
		this.repos = ghAPI.getRepos();
	}
}

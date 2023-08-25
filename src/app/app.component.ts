import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { GitHubAPIService, Repository } from "./git-hub-api.service";
import type { Job } from "./job/job.component";

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
	public readonly jobs: readonly Readonly<Job>[] = [
		{
			accomplishments: [
				"Developed the Apache Traﬃc Control (ATC) CDN control-plane management software suite",
				"Front-end (originally) in Angular.js with jQuery and Bootstrap",
				"Spearheaded and led development eﬀort to modernize using Angular (v12-16)",
				"Back-end(s) in Go, Java, Perl",
				"Led REST API design discussions; drafted data modeling design documents",
				"Develop and maintain API clients in Python (PyPI), TypeScript (NPM), and Go",
				"Pioneered Docker-based testing, demo, and development environments",
				"Through heavy participation in the open-source community, became ATC Project Management Committee member",
				"Led the ATC working group for the past few years",
				"Acted as Release Manager for the 5.x series of ATC versions",
			],
			company: "Comcast",
			start: new Date("2017-05-17"),
			title: "Software Engineer IV",
		},
	];

	constructor(ghAPI: GitHubAPIService) {
		this.repos = ghAPI.getRepos();
	}

	/**
	 * A tracking function for iterating things with unique IDs.
	 *
	 * @param _ Item index (unused).
	 * @param item Item in question.
	 * @returns Something which uniquely identifies the `item`.
	 */
	public track(_: unknown, item: {id: number}): unknown {
		return item.id;
	}

	/**
	 * A tracking function for iterating things with unique titles.
	 *
	 * @param _ Item index (unused).
	 * @param item Item in question.
	 * @returns Something which uniquely identifies the `item`.
	 */
	public trackJob(_: unknown, item: {title: string}): unknown {
		return item.title;
	}
}

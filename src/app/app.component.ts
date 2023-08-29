import { Component } from "@angular/core";
import { Observable, map } from "rxjs";

import { GitHubAPIService, Repository } from "./git-hub-api.service";
import type { Job } from "./job/job.component";

const ATC: Readonly<Repository> = {
	description: "Apache Traffic Control is an open-source implementation of a Content Delivery Network",
	// This name is decided by the GitHub API and is beyond my control
	// eslint-disable-next-line @typescript-eslint/naming-convention
	html_url: "https://github.com/apache/trafficcontrol",
	language: "Go",
	name: "Apache Traffic Control",
	owner: {
		login: "apache",
	},
} as Repository;

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
				"Developed the Apache Traffic Control (ATC) CDN control-plane management software suite",
				"Front-end (originally) in Angular.js with jQuery and Bootstrap",
				"Spearheaded and led development effort to modernize using Angular (v12-16)",
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
		{
			accomplishments: [
				"Developed Incode government accounting software",
				"Front-end in Angular.js using TypeScript and SCSS",
				"Back-end in C# and Transact SQL"
			],
			company: "Tyler Technologies",
			end: new Date("2017-05-17"),
			start: new Date("2016-06-05"),
			title: "Software Developer"
		},
		{
			accomplishments: [
				"Created patent automation webapp using Angular, TypeScript, and HTML5/SCSS",
				"Based on an app framework translated out of Vue.js",
				"Back-end using TypeScript for a NodeJS Express web server",
				"Used natural language processing to convert English sentences into business logic",
				"Created and implemented a full REST API data model from server-side to client-side, using a PostgreSQL data store",
				"Directly managed project methodologies including client expectations and development pace and prioritization",
				"Set a deployment schedule to continuously deliver into a production environment weekly for three years",
			],
			company: "Fenix AI LLC",
			end: new Date("2023-02-28"),
			start: new Date("2020-01-01"),
			title: "Freelance Webapp Engineer"
		}
	];

	constructor(ghAPI: GitHubAPIService) {
		this.repos = ghAPI.getRepos().pipe(map((rs) => [ATC].concat(rs)));
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

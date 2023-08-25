import { Component, Input } from "@angular/core";

/**
 * Job objects contain the data needed to render a Job.
 */
export interface Job {
	accomplishments: string[];
	company: string;
	title: string;
	start: Date;
	end?: Date;
}

/**
 * A JobComponent represents a job I've held.
 */
@Component({
	selector: "ocket8888-job[job]",
	styleUrls: ["./job.component.scss"],
	templateUrl: "./job.component.html",
})
export class JobComponent {
	@Input() public job!: Job;
}

import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

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
	standalone: false,
	styleUrls: ["./job.component.scss"],
	changeDetection: ChangeDetectionStrategy.Eager,
	templateUrl: "./job.component.html",
})
export class JobComponent {
	@Input() public job!: Job;
}

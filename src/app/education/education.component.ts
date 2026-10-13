import { Component, ChangeDetectionStrategy } from "@angular/core";

/**
 * EducationComponent holds my degree information to date.
 *
 * Growing this list is a very lengthy process, so I just put
 * everything in the template. It's unlikely to need to change
 * programmatically, so that was faster.
 */
@Component({
	changeDetection: ChangeDetectionStrategy.Eager,
	selector: "ocket8888-education",
	standalone: false,
	styleUrls: ["./education.component.scss"],
	templateUrl: "./education.component.html",
})
export class EducationComponent {

}

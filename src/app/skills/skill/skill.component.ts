import { Component, Input } from "@angular/core";

/**
 * A Skill is something I'm good at.
 */
export interface Skill {
	name: string;
	icon?: string;
}

/**
 * Represents a single Skill.
 */
@Component({
	selector: "ocket8888-skill[skill]",
	styleUrls: ["./skill.component.scss"],
	templateUrl: "./skill.component.html",
})
export class SkillComponent {
	@Input() public skill!: Skill;
}

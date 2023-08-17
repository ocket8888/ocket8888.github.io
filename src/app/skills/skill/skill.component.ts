import { Component, Input } from "@angular/core";

/**
 * A Skill is something I'm good at.
 */
export interface Skill {
	name: string;
	icon?: string;
	/** Proficiency level - MUST be on the range [0, 100]. */
	level: number;
}

/**
 * Various skill levels, calculated from the `level` value of a {@link Skill}
 * and the {@link SkillComponent.LOW} property of the {@link SkillComponent}
 * class.
 */
const enum SkillLevel {
	/** Mastery over the subject matter. */
	EXPERT = "Expert",
	/** Artfully and deftly apply the skill to any appropriate situation. */
	SKILLED = "Skilled",
	/** Have acquired a respectable level of experience with the skill. */
	PROFICIENT = "Proficient",
	/** Average competence. */
	INTERMEDIATE = "Intermediate",
	/** Still fairly new to the skill. */
	NOVICE = "Novice",
	/** Only begun to learn the skill. */
	BEGINNER = "Beginner",
	/** Have never done this before. */
	NO_SKILL = "No Skill",
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

	public static readonly LOW = 50;

	/**
	 * The value beneath which my skill may be considered "low".
	 */
	public get low(): number {
		return SkillComponent.LOW;
	}

	/**
	 * The amount by which skill levels will step above and below the
	 * LOW setting.
	 */
	public static get step(): [number, number] {
		return [(100 - this.LOW) / 3, this.LOW / 3];
	}

	/**
	 * Gets a human-readable description of the level of proficiency I have with
	 * the component's {@link skill}.
	 *
	 * @returns A descriptive measure of the level of proficiency I have with
	 * the represented Skill.
	 */
	public levelDescription(): SkillLevel {
		const [high, low] = SkillComponent.step;
		const {level} = this.skill;
		if (level > SkillComponent.LOW) {
			switch (Math.trunc((level - SkillComponent.LOW) / high)) {
				case 0:
					return SkillLevel.PROFICIENT;
				case 1:
					return SkillLevel.SKILLED;
				default:
					return SkillLevel.EXPERT;
			}
		}
		switch (Math.round(level / low)) {
			case 0:
				return SkillLevel.NO_SKILL;
			case 1:
				return SkillLevel.BEGINNER;
			case 2:
				return SkillLevel.NOVICE;
			default:
				return SkillLevel.INTERMEDIATE;
		}
	}
}

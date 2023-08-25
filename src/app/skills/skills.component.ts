import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

import type { Skill } from "./skill/skill.component";

const random = (): number => (Math.random()-0.5);

/**
 * The Skills page/tab contains all of my various skills.
 */
@Component({
	selector: "ocket8888-skills",
	styleUrls: ["./skills.component.scss"],
	templateUrl: "./skills.component.html",
})
export class SkillsComponent {
	public readonly languages: readonly Readonly<Skill>[] = [
		{
			icon: "C",
			level: 60,
			name: "C",
		},
		{
			icon: "C++",
			level: 60,
			name: "C++",
		},
		{
			icon: "C#",
			level: 50,
			name: "C#",
		},
		{
			icon: "java",
			level: 50,
			name: "Java",
		},
		{
			icon: "golang",
			level: 100,
			name: "Go",
		},
		{
			icon: "postgres",
			level: 95,
			name: "PostgreSQL",
		},
		{
			icon: "bash",
			level: 95,
			name: "Shell (Bash) Scripting"
		},
		{
			icon: "python",
			level: 100,
			name: "Python",
		},
		{
			icon: "HTML",
			level: 100,
			name: "HTML",
		},
		{
			icon: "CSS",
			level: 100,
			name: "CSS",
		},
		{
			icon: "js",
			level: 100,
			name: "Javascript"
		},
		{
			icon: "ts",
			level: 100,
			name: "TypeScript",
		},
		{
			icon: "haskell",
			level: 20,
			name: "Haskell",
		},
	].sort(random);
	public readonly tech: readonly Readonly<Skill>[] = [
		{
			icon: "docker",
			level: 80,
			name: "Docker",
		},
		{
			icon: "angular",
			level: 95,
			name: "Angular",
		},
		{
			icon: "node",
			level: 85,
			name: "NodeJS",
		},
		{
			icon: "next.js",
			level: 40,
			name: "Next.js",
		},
		{
			icon: "git",
			level: 80,
			name: "Git",
		},
		{
			icon: "linux",
			level: 100,
			name: "Linux Programming",
		},
		{
			icon: "windows",
			level: 70,
			name: "Windows Programming",
		},
		{
			icon: "macOS",
			level: 80,
			name: "MacOS",
		},
		{
			icon: "react",
			level: 50,
			name: "React",
		},
	].sort(random);
	public readonly markupLanguages: readonly Readonly<Skill>[] = [
		{
			icon: "markdown",
			level: 100,
			name: "Markdown",
		},
		{
			icon: "latex",
			level: 90,
			name: "LaTeX",
		},
		{
			level: 95,
			name: "reStructuredText",
		}
	].sort(random);
	public readonly other: readonly Readonly<Skill>[] = [
		{
			level: 80,
			name: "SEO",
		},
		{
			level: 100,
			name: "Data Modeling",
		},
		{
			level: 100,
			name: "REST API design",
		},
		{
			level: 100,
			name: "Code Review",
		},
		{
			level: 90,
			name: "Peer Programming"
		},
		{
			level: 100,
			name: "Accessible Design"
		}
	].sort(random);

	constructor(private readonly iconRegistry: MatIconRegistry, private readonly sanitizer: DomSanitizer) {
		this.addIcon("C++", "c++.svg");
		this.addIcon("C", "c.svg");
		this.addIcon("C#", "c#.svg");
		this.addIcon("java", "java.svg");
		this.addIcon("golang", "go.svg");
		this.addIcon("postgres", "postgres.svg");
		this.addIcon("python", "python.svg");
		this.addIcon("ts", "typescript.svg");
		this.addIcon("js", "javascript.svg");
		this.addIcon("HTML", "html.svg");
		this.addIcon("CSS", "css.svg");
		this.addIcon("bash", "bash.svg");
		this.addIcon("docker", "docker.svg");
		this.addIcon("angular", "angular.svg");
		this.addIcon("git", "git.svg");
		this.addIcon("node", "node.svg");
		this.addIcon("markdown", "markdown.svg");
		this.addIcon("latex", "latex.svg");
		this.addIcon("linux", "linux.svg");
		this.addIcon("windows", "windows.svg");
		this.addIcon("macOS", "macos.svg");
		this.addIcon("next.js", "next.js.svg");
		this.addIcon("haskell", "haskell.svg");
		this.addIcon("react", "react.svg");
	}

	/**
	 * Adds a new SVG icon.
	 *
	 * @param name The name under which to register the icon.
	 * @param asset The path to the SVG asset relative to `/assets/`
	 */
	private addIcon(name: string, asset: string): void {
		const url = this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/${encodeURIComponent(asset)}`);
		this.iconRegistry.addSvgIcon(name, url);
	}

	/**
	 * A tracking function for {@link Skill}s.
	 *
	 * @param _ Item index (unused).
	 * @param skill The skill to identify
	 * @returns Something by which the `skill` may be uniquely identified.
	 */
	public track(_: unknown, skill: Skill): unknown {
		return skill.name;
	}
}

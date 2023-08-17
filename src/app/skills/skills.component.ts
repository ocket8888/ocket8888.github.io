import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

import type { Skill } from "./skill/skill.component";

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
		}
	].sort(()=>Math.random()-0.5);
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
			icon: "git",
			level: 80,
			name: "Git",
		}
	].sort(()=>(Math.random()-0.5));
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
		}
	].sort(()=>(Math.random()-0.5));

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
}

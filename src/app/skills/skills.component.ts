import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

import type { Skill } from "./skill/skill.component";

@Component({
	selector: "ocket8888-skills",
	styleUrls: ["./skills.component.scss"],
	templateUrl: "./skills.component.html",
})
export class SkillsComponent {
	public readonly languages: readonly Readonly<Skill>[] = [
		{
			icon: "C",
			name: "C",
		},
		{
			icon: "C++",
			name: "C++",
		},
		{
			icon: "C#",
			name: "C#",
		},
		{
			icon: "java",
			name: "Java",
		},
		{
			icon: "golang",
			name: "Go",
		},
		{
			icon: "postgres",
			name: "PostgreSQL",
		},
		{
			icon: "bash",
			name: "Shell (Bash) Scripting"
		},
		{
			icon: "python",
			name: "Python",
		},
		{
			icon: "HTML",
			name: "HTML",
		},
		{
			icon: "CSS",
			name: "CSS",
		},
		{
			icon: "js",
			name: "Javascript"
		},
		{
			icon: "ts",
			name: "TypeScript",
		}
	];
	public readonly tech: readonly Readonly<Skill>[] = [
		{
			icon: "docker",
			name: "Docker",
		},
		{
			icon: "angular",
			name: "Angular",
		},
		{
			icon: "node",
			name: "NodeJS",
		},
		{
			icon: "git",
			name: "Git",
		}
	];
	public readonly markupLanguages: readonly Readonly<Skill>[] = [
		{
			icon: "markdown",
			name: "Markdown",
		},
		{
			icon: "latex",
			name: "LaTeX",
		}
	];

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

	private addIcon(name: string, asset: string) {
		const url = this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/${encodeURIComponent(asset)}`);
		this.iconRegistry.addSvgIcon(name, url);
	}
}

import { Component, Input } from "@angular/core";

import type { Repository } from "../git-hub-api.service";

/**
 * Represents a repository. For now, this just lists basic information, but it's
 * possible I'll change that in the future in some way.
 */
@Component({
	selector: "ocket8888-repo[repo]",
	styleUrls: ["./repo.component.scss"],
	templateUrl: "./repo.component.html",
})
export class RepoComponent {
	@Input() public repo!: Repository;
}

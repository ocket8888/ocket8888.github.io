import { Component, Input } from "@angular/core";

import type { Repository } from "../git-hub-api.service";

@Component({
	selector: "ocket8888-repo[repo]",
	styleUrls: ["./repo.component.scss"],
	templateUrl: "./repo.component.html",
})
export class RepoComponent {
	@Input() public repo!: Repository;
}

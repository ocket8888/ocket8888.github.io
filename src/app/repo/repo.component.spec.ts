import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RepoComponent } from "./repo.component";
import { AppModule } from "../app.module";

describe("RepoComponent", () => {
	let component: RepoComponent;
	let fixture: ComponentFixture<RepoComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [RepoComponent],
			imports: [AppModule],
		});
		fixture = TestBed.createComponent(RepoComponent);
		component = fixture.componentInstance;
		component.repo = {
			description: "repository data used for testing purposes",
			html_url: "",
			language: "python",
			name: "Test Repository",
		};
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

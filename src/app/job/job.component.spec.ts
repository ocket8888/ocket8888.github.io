import { ComponentFixture, TestBed } from "@angular/core/testing";

import { JobComponent } from "./job.component";
import { AppModule } from "../app.module";

describe("JobComponent", () => {
	let component: JobComponent;
	let fixture: ComponentFixture<JobComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [JobComponent],
			imports: [AppModule],
		});
		fixture = TestBed.createComponent(JobComponent);
		component = fixture.componentInstance;
		component.job = {
			accomplishments: [],
			company: "Test Company",
			end: new Date(),
			start: new Date(),
			title: "Test Job Title",
		}
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EducationComponent } from "./education.component";
import { AppModule } from "../app.module";

describe("EducationComponent", () => {
	let component: EducationComponent;
	let fixture: ComponentFixture<EducationComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EducationComponent],
			imports: [AppModule]
		});
		fixture = TestBed.createComponent(EducationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SkillComponent } from "./skill.component";
import { AppModule } from "@src/app/app.module";

describe("SkillComponent", () => {
	let component: SkillComponent;
	let fixture: ComponentFixture<SkillComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [SkillComponent],
			imports: [AppModule]
		});
		fixture = TestBed.createComponent(SkillComponent);
		component = fixture.componentInstance;
		component.skill = {
			level: 50,
			name: "Test Skill",
		};
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsExperience } from './skills-experience';

describe('SkillsExperience', () => {
  let component: SkillsExperience;
  let fixture: ComponentFixture<SkillsExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsExperience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsExperience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render labeled skill icons and experience entries', () => {
    const skillIcons = fixture.nativeElement.querySelectorAll('.skill-icon');
    const experienceEntries = fixture.nativeElement.querySelectorAll('.experience-entry');

    expect(skillIcons.length).toBeGreaterThan(0);
    expect(fixture.nativeElement.textContent).toContain('Java');
    expect(fixture.nativeElement.querySelector('.devicon-java-plain')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.devicon-spring-original')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.devicon-mongodb-plain')).toBeTruthy();
    expect(experienceEntries.length).toBe(component.experiences.length);
    expect(fixture.nativeElement.textContent).not.toContain('[cite:');
  });
});

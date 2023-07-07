import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutExperiencesComponent } from './ajout-experiences.component';

describe('AjoutExperiencesComponent', () => {
  let component: AjoutExperiencesComponent;
  let fixture: ComponentFixture<AjoutExperiencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutExperiencesComponent]
    });
    fixture = TestBed.createComponent(AjoutExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

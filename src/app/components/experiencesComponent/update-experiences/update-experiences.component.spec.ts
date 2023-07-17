import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExperiencesComponent } from './update-experiences.component';

describe('UpdateExperiencesComponent', () => {
  let component: UpdateExperiencesComponent;
  let fixture: ComponentFixture<UpdateExperiencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateExperiencesComponent]
    });
    fixture = TestBed.createComponent(UpdateExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

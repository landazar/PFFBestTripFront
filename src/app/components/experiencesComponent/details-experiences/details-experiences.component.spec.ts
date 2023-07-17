import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsExperiencesComponent } from './details-experiences.component';

describe('DetailsGuideComponent', () => {
  let component: DetailsExperiencesComponent;
  let fixture: ComponentFixture<DetailsExperiencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsExperiencesComponent]
    });
    fixture = TestBed.createComponent(DetailsExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeExperiencesComponent } from './liste-experiences.component';

describe('ListeExperiencesComponent', () => {
  let component: ListeExperiencesComponent;
  let fixture: ComponentFixture<ListeExperiencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeExperiencesComponent]
    });
    fixture = TestBed.createComponent(ListeExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

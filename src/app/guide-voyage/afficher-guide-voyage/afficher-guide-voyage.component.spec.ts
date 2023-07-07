import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherGuideVoyageComponent } from './afficher-guide-voyage.component';

describe('AfficherGuideVoyageComponent', () => {
  let component: AfficherGuideVoyageComponent;
  let fixture: ComponentFixture<AfficherGuideVoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherGuideVoyageComponent]
    });
    fixture = TestBed.createComponent(AfficherGuideVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

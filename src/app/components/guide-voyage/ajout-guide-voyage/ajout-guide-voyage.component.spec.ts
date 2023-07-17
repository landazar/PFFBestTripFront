import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutGuideVoyageComponent } from './ajout-guide-voyage.component';

describe('AjoutGuideVoyageComponent', () => {
  let component: AjoutGuideVoyageComponent;
  let fixture: ComponentFixture<AjoutGuideVoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutGuideVoyageComponent]
    });
    fixture = TestBed.createComponent(AjoutGuideVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 
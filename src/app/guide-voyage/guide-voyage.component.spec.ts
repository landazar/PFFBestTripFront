import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideVoyageComponent } from './guide-voyage.component';

describe('GuideVoyageComponent', () => {
  let component: GuideVoyageComponent;
  let fixture: ComponentFixture<GuideVoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuideVoyageComponent]
    });
    fixture = TestBed.createComponent(GuideVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

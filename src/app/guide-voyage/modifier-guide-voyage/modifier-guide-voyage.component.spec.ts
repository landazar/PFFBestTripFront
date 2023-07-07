import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierGuideVoyageComponent } from './modifier-guide-voyage.component';

describe('ModifierGuideVoyageComponent', () => {
  let component: ModifierGuideVoyageComponent;
  let fixture: ComponentFixture<ModifierGuideVoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierGuideVoyageComponent]
    });
    fixture = TestBed.createComponent(ModifierGuideVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

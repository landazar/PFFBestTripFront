import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerPaysComponent } from './creer-pays.component';

describe('CreerPaysComponent', () => {
  let component: CreerPaysComponent;
  let fixture: ComponentFixture<CreerPaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreerPaysComponent]
    });
    fixture = TestBed.createComponent(CreerPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

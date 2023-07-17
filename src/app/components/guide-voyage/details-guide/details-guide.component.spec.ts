import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGuideComponent } from './details-guide.component';

describe('DetailsGuideComponent', () => {
  let component: DetailsGuideComponent;
  let fixture: ComponentFixture<DetailsGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsGuideComponent]
    });
    fixture = TestBed.createComponent(DetailsGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

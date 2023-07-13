import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPagesComponent } from './header-pages.component';

describe('HeaderPagesComponent', () => {
  let component: HeaderPagesComponent;
  let fixture: ComponentFixture<HeaderPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPagesComponent]
    });
    fixture = TestBed.createComponent(HeaderPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

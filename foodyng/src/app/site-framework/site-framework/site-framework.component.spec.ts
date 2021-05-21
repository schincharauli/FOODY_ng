import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteFrameworkComponent } from './site-framework.component';

describe('SiteFrameworkComponent', () => {
  let component: SiteFrameworkComponent;
  let fixture: ComponentFixture<SiteFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteFrameworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

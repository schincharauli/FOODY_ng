import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowTWorksComponent } from './how-t-works.component';

describe('HowTWorksComponent', () => {
  let component: HowTWorksComponent;
  let fixture: ComponentFixture<HowTWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowTWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowTWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

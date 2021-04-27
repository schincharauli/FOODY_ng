import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestemoniesCardComponent } from './testemonies-card.component';

describe('TestemoniesCardComponent', () => {
  let component: TestemoniesCardComponent;
  let fixture: ComponentFixture<TestemoniesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestemoniesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestemoniesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

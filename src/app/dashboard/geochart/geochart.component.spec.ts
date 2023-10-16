import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeochartComponent } from './geochart.component';

describe('GeochartComponent', () => {
  let component: GeochartComponent;
  let fixture: ComponentFixture<GeochartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeochartComponent]
    });
    fixture = TestBed.createComponent(GeochartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

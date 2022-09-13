import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxHComponent } from './box-h.component';

describe('BoxHComponent', () => {
  let component: BoxHComponent;
  let fixture: ComponentFixture<BoxHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

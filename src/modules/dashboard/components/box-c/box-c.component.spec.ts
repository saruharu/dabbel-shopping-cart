import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCComponent } from './box-c.component';

describe('BoxCComponent', () => {
  let component: BoxCComponent;
  let fixture: ComponentFixture<BoxCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

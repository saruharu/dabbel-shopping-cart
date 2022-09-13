import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxGComponent } from './box-g.component';

describe('BoxGComponent', () => {
  let component: BoxGComponent;
  let fixture: ComponentFixture<BoxGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

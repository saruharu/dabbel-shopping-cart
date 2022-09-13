import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxEComponent } from './box-e.component';

describe('BoxEComponent', () => {
  let component: BoxEComponent;
  let fixture: ComponentFixture<BoxEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

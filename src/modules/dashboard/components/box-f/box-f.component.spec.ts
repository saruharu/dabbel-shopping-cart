import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFComponent } from './box-f.component';

describe('BoxFComponent', () => {
  let component: BoxFComponent;
  let fixture: ComponentFixture<BoxFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

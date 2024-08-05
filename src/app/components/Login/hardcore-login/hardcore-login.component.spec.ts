import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardcoreLoginComponent } from './hardcore-login.component';

describe('HardcoreLoginComponent', () => {
  let component: HardcoreLoginComponent;
  let fixture: ComponentFixture<HardcoreLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardcoreLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardcoreLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

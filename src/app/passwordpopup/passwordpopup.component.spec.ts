import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordpopupComponent } from './passwordpopup.component';

describe('PasswordpopupComponent', () => {
  let component: PasswordpopupComponent;
  let fixture: ComponentFixture<PasswordpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordpopupComponent]
    });
    fixture = TestBed.createComponent(PasswordpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

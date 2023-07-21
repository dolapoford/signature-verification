import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureVerificationComponent } from './signature-verification.component';

describe('SignatureVerificationComponent', () => {
  let component: SignatureVerificationComponent;
  let fixture: ComponentFixture<SignatureVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignatureVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

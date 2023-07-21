import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureVerificationDataComponent } from './signature-verification-data.component';

describe('SignatureVerificationDataComponent', () => {
  let component: SignatureVerificationDataComponent;
  let fixture: ComponentFixture<SignatureVerificationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureVerificationDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignatureVerificationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

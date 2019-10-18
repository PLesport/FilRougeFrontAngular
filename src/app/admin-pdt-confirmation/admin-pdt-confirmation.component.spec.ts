import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPdtConfirmationComponent } from './admin-pdt-confirmation.component';

describe('AdminPdtConfirmationComponent', () => {
  let component: AdminPdtConfirmationComponent;
  let fixture: ComponentFixture<AdminPdtConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPdtConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPdtConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

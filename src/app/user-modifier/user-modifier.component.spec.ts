import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModifierComponent } from './user-modifier.component';

describe('UserModifierComponent', () => {
  let component: UserModifierComponent;
  let fixture: ComponentFixture<UserModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

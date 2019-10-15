import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProfileComponent } from './modifier-profile.component';

describe('ModifierProfileComponent', () => {
  let component: ModifierProfileComponent;
  let fixture: ComponentFixture<ModifierProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

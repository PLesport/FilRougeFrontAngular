import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHistoriqueComponent } from './user-historique.component';

describe('UserHistoriqueComponent', () => {
  let component: UserHistoriqueComponent;
  let fixture: ComponentFixture<UserHistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

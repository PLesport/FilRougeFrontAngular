import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTeaComponent } from './product-tea.component';

describe('ProductTeaComponent', () => {
  let component: ProductTeaComponent;
  let fixture: ComponentFixture<ProductTeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

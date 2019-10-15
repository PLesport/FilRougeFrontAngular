import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCoffeeComponent } from './product-coffee.component';

describe('ProductCoffeeComponent', () => {
  let component: ProductCoffeeComponent;
  let fixture: ComponentFixture<ProductCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

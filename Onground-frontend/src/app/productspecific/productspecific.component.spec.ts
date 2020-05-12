import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductspecificComponent } from './productspecific.component';

describe('ProductspecificComponent', () => {
  let component: ProductspecificComponent;
  let fixture: ComponentFixture<ProductspecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductspecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductspecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

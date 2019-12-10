import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportShopComponent } from './sport-shop.component';

describe('SportShopComponent', () => {
  let component: SportShopComponent;
  let fixture: ComponentFixture<SportShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

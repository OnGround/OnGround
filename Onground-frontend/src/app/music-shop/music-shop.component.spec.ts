import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicShopComponent } from './music-shop.component';

describe('MusicShopComponent', () => {
  let component: MusicShopComponent;
  let fixture: ComponentFixture<MusicShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

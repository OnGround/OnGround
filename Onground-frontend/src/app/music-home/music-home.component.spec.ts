import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MusicHomeComponent } from "./music-home.component";

describe("SportsHomeComponent", () => {
  let component: MusicHomeComponent;
  let fixture: ComponentFixture<MusicHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MusicHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

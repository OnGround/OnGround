import { Component, OnInit } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {
  constructor() {}
  leftHover = 0;
  rightHover = 0;
  spaces = "-------------------------";

  onLeftButtonHover() {
    this.leftHover = 1;
  }

  offLeftButtonHover() {
    this.leftHover = 0;
  }
  onRightButtonHover() {
    this.rightHover = 1;
  }

  offRightButtonHover() {
    this.rightHover = 0;
  }

  ngOnInit() {}
}

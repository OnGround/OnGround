import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
declare var require: any;

@Component({
  selector: "app-sports-home",
  templateUrl: "./sports-home.component.html",
  styleUrls: ["./sports-home.component.scss"]
})
export class SportsHomeComponent implements OnInit {
  switchMsg;
  switchBtn;
  img;
  linkrouter;
  ngOnInit() {
    this.switchMsg = "Switch to Music";
    this.switchBtn = false;
    this.img = require("../../assets/img/sport.png");
    this.linkrouter = "/musichome";
  }

  constructor() {}

  category(msg) {
    alert(msg);
  }
}

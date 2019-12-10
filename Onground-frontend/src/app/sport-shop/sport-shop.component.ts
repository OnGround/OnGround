import { Component, OnInit } from "@angular/core";
declare var require: any;

@Component({
  selector: "app-sport-shop",
  templateUrl: "./sport-shop.component.html",
  styleUrls: ["./sport-shop.component.scss"]
})
export class SportShopComponent implements OnInit {
  switchMsg;
  switchBtn;
  img;
  linkrouter;
  constructor() {}

  ngOnInit() {
    this.switchMsg = "Switch to Music";
    this.switchBtn = false;
    this.img = require("../../assets/img/sport.png");
    this.linkrouter = "/musichome";
  }
}

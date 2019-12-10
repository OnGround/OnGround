import { Component, OnInit } from "@angular/core";
declare var require: any;

@Component({
  selector: "app-music-shop",
  templateUrl: "./music-shop.component.html",
  styleUrls: ["./music-shop.component.scss"]
})
export class MusicShopComponent implements OnInit {
  switchMsg;
  switchBtn;
  img;
  linkrouter;
  constructor() {}

  ngOnInit() {
    this.switchMsg = "Switch to Sport";
    this.switchBtn = true;
    this.img = require("../../assets/img/musiclogo.png");
    this.linkrouter = "/sporthome";
  }
  category(msg) {
    alert(msg);
  }
}

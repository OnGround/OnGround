import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { Router } from "@angular/router";
declare var require: any;

@Component({
  selector: "app-music-home",
  templateUrl: "./music-home.component.html",
  styleUrls: ["./music-home.component.scss"]
})
export class MusicHomeComponent implements OnInit {
  switchMsg;
  switchBtn;
  img;
  linkrouter;
  ngOnInit() {
    this.switchMsg = "Switch to Sport";
    this.switchBtn = true;
    this.img = require("../../assets/img/musiclogo.png");
    this.linkrouter = "/sporthome";
  }

  constructor() {}

  category(msg) {
    alert(msg);
  }
  // linkrouter() {
  //   this.router.navigateByUrl("/sporthome");
  // }
}

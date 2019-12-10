import { Component, OnInit } from "@angular/core";
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
  buy() {
    this.router.navigateByUrl("/musicshop");
  }
  constructor(private router: Router) {}

  category(msg) {
    alert(msg);
  }
  // linkrouter() {
  //   this.router.navigateByUrl("/sporthome");
  // }
}

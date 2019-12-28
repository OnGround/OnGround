import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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

  constructor(private router: Router) { }
  buy() {
    this.router.navigateByUrl("/sportshop");
  }
  courtBooking() {
    this.router.navigateByUrl("/courtbooking");
  }
  category(msg) {
    alert(msg);
  }
}

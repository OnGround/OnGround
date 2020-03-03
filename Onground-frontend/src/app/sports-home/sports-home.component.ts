import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare var require: any;

@Component({
  selector: "app-sports-home",
  templateUrl: "./sports-home.component.html",
  styleUrls: ["./sports-home.component.scss"]
})
export class SportsHomeComponent implements OnInit {
  // switchMsg;
  // switchBtn;
  // img;
  // linkrouter;
  Vouchermsg;
  VoucherCode;
  ngOnInit() {
    this.Vouchermsg = "EXCLUSIVE OFFER 10% OFF On all bookings";
    this.VoucherCode = "Coupon Code 67576";
    // this.switchMsg = "Switch to Music";
    // this.switchBtn = false;
    // this.img = require("../../assets/img/sport.png");
    // this.linkrouter = "/musichome";
  }

  constructor(private router: Router) {}
  buy() {
    this.router.navigateByUrl("/sportshop");
  }
  category(msg) {
    alert(msg);
  }
}

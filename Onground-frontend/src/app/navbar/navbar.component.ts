import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  @Input() switchMsg;
  @Input() switchBtn;
  @Input() img;
  // @Input() linkrouter: any;

  constructor(private router: Router) {}
  linkrouter;
  ngOnInit() {
    this.linkrouter = "/sporthome";
  }
  // linkrouter() {
  //   if (this.switchMsg === "Switch to Music")
  //     this.router.navigateByUrl("/sporthome");
  //   else if (this.switchMsg === "Switch to Sport")
  //     this.router.navigateByUrl("/musichome");
  // }
}

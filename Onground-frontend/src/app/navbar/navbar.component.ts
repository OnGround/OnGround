import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  showSearch: boolean = false;
  home;
  shop;
  constructor(private router: Router) {}
  ngOnInit() {
    this.home = "/home";
    this.shop = "/shop";
  }
  searchbar() {
    this.showSearch = !this.showSearch;
  }
  account() {
    this.router.navigateByUrl("/accounts");
  }
}

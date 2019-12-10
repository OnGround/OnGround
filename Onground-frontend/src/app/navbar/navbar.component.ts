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
  @Input() linkrouter: any;

  constructor(private router: Router) {}
  ngOnInit() {}
}

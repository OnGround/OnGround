import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });
  constructor(private router: Router) {}
  ngOnInit() {}
  forgotPassword() {
    alert("Forgot password");
  }
  socialMedia(site) {
    switch (site) {
      case "facebook": {
        window.open("https://www.facebook.com");
        break;
      }
      case "twitter": {
        window.open("https://twitter.com");
        break;
      }
      case "instagram": {
        window.open("https://www.instagram.com");
        break;
      }
    }
  }
  createaccount() {
    this.router.navigateByUrl("/register");
  }
}

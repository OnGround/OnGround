import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-zA-Z]+$")
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-zA-Z]+$")
    ]),
    email: new FormControl("", [Validators.required, Validators.email]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)
    ]),
    username: new FormControl("", [
      Validators.required,
      Validators.pattern(
        "^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
      )
    ]),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required])
  });
  constructor(private router: Router) {}

  ngOnInit() {
    var imgBtn = document.getElementById("profileimage");
    let fileInp: HTMLElement = document.querySelector(
      '[type="file"]'
    ) as HTMLElement;
    imgBtn.addEventListener("click", function() {
      fileInp.click();
    });
  }
  uploadImage() {
    alert("Upload Image");
  }
  onSave() {
    alert("Saved");
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
}

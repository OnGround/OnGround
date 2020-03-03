import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
declare var require: any;

@Component({
  selector: "app-sport-shop",
  templateUrl: "./sport-shop.component.html",
  styleUrls: ["./sport-shop.component.scss"]
})
export class SportShopComponent implements OnInit {
  items: any = [];
  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      { id: 1, name: "FOOTBALL", img: "/../assets/img/football.png" },
      { id: 2, name: "BASKETBALL", img: "/../assets/img/basketball.png" },
      { id: 3, name: "BADMINTON", img: "/../assets/img/badminton.png" },
      { id: 4, name: "TENNIS", img: "/../assets/img/volleyball.png" },
      { id: 5, name: "FOOTBALL", img: "/../assets/img/football.png" },
      { id: 6, name: "BASKETBALL", img: "/../assets/img/basketball.png" },
      { id: 7, name: "BADMINTON", img: "/../assets/img/badminton.png" },
      { id: 8, name: "TENNIS", img: "/../assets/img/volleyball.png" },
      { id: 9, name: "FOOTBALL", img: "/../assets/img/football.png" },
      { id: 10, name: "BASKETBALL", img: "/../assets/img/basketball.png" },
      { id: 11, name: "BADMINTON", img: "/../assets/img/badminton.png" },
      { id: 12, name: "TENNIS", img: "/../assets/img/volleyball.png" },
      { id: 9, name: "FOOTBALL", img: "/../assets/img/football.png" },
      { id: 10, name: "BASKETBALL", img: "/../assets/img/basketball.png" },
      { id: 11, name: "BADMINTON", img: "/../assets/img/badminton.png" },
      { id: 12, name: "TENNIS", img: "/../assets/img/volleyball.png" },
      { id: 9, name: "FOOTBALL", img: "/../assets/img/football.png" },
      { id: 10, name: "BASKETBALL", img: "/../assets/img/basketball.png" },
      { id: 11, name: "BADMINTON", img: "/../assets/img/badminton.png" },
      { id: 12, name: "TENNIS", img: "/../assets/img/volleyball.png" }
    ];
  }
  itemPage(item) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        item_id: item.id,
        item_name: item.name,
        item_img: item.img
      }
    };
    this.router.navigate(["/item"], navigationExtras);
  }
}

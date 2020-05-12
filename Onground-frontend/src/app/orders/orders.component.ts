import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  constructor() {}
  orders;
  orderprods;
  ngOnInit() {
    this.orders = "/orders";
    this.orderprods = [
      {
        id: 1,
        name: "MEN'S FOOTBALL SHOES",
        img: "/../assets/img/shoe1.png",
        price: "Rs 8000",
        type: "accessories",
        brand: "NIKE MERCURIAL VAPOUR 7",
        wishlist: true,
        status: "Dispatched",
        from_status_place: "BANGALORE",
        to_status_place: "CHENNAI",
        status_price: "2500"
      },
      {
        id: 2,
        name: "FOOTBALL",
        img: "/../assets/img/ball4.png",
        price: "Rs 7000",
        type: "accessories",
        brand: "NIKE MERCURIAL VAPOUR 7",
        wishlist: true,
        status: "Dispatched",
        from_status_place: "BANGALORE",
        to_status_place: "CHENNAI",
        status_price: "2500"
      },
      {
        id: 3Y,
        name: "FOOTBALL",
        img: "/../assets/img/ball4.png",
        price: "Rs 7000",
        type: "accessories",
        brand: "NIKE MERCURIAL VAPOUR 7",
        wishlist: true,
        status: "Dispatched",
        from_status_place: "BANGALORE",
        to_status_place: "CHENNAI",
        status_price: "2500"
      }
    ];
  }
}

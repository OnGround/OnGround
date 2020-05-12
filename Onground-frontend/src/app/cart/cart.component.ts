import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  sub;
  id;
  name;
  img;
  price;
  relatedproducts: any = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.id = params["item_id"];
      this.name = params["item_name"];
      this.img = params["item_img"];
      this.price = params["item_price"];
    });
    //call api to show related products
    this.relatedproducts = [
      {
        id: 3,
        name: "FOOTBALL",
        img: "/../assets/img/ball3.png",
        price: "8000 Rs",
        type: "accessories",
        brand: "NIKE",
        wishlist: true
      },
      {
        id: 4,
        name: "FOOTBALL",
        img: "/../assets/img/ball4.png",
        price: "8000 Rs",
        type: "accessories",
        wishlist: true,
        brand: "NIKE"
      },
      {
        id: 5,
        name: "FOOTBALL",
        img: "/../assets/img/ball4.png",
        price: "8000 Rs",
        brand: "NIKE",
        type: "accessories",
        wishlist: false
      },
      {
        id: 6,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball4.png",
        price: "8000 Rs",
        type: "accessories",
        wishlist: false
      },
      {
        id: 7,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball3.png",
        price: "8000 Rs",
        type: "accessories",
        wishlist: false
      },
      {
        id: 8,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball1.png",
        price: "8000 Rs",
        type: "accessories",
        wishlist: false
      },
      {
        id: 9,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball1.png",
        price: "8000 Rs",
        type: "accessories",
        wishlist: false
      },
      {
        id: 10,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball4.png",
        price: "8000 Rs",
        type: "accessories",
        wishlist: false
      },
      {
        id: 11,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball3.png",
        price: "8000 Rs",
        type: "accessories"
      },
      {
        id: 12,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball1.png",
        price: "8000 Rs",
        wishlist: false
      },
      {
        id: 9,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball1.png",
        price: "8000 Rs",
        type: "accessories",
        wishlist: false
      },
      {
        id: 10,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball4.png",
        price: "8000 Rs",
        type: "accessories",
        wishlist: false
      },
      {
        id: 11,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball3.png",
        price: "8000 Rs",
        type: "accessories",
        wishlist: false
      },
      {
        id: 12,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball1.png",
        price: "8000 Rs",
        type: "accessories",
        wishlist: false
      },
      {
        id: 9,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball1.png",
        price: "8000 Rs",
        type: "accessories",
        wishlist: false
      },
      {
        id: 10,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball4.png",
        price: "8000 Rs",
        type: "accessories",
        wishlist: false
      },
      {
        id: 11,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball3.png",
        price: "8000 Rs",
        type: "accessories",
        wishlist: false
      },
      {
        id: 12,
        brand: "NIKE",
        name: "FOOTBALL",
        img: "/../assets/img/ball1.png",
        price: "8000 Rs",
        type: "accessories",
        wishlist: false
      }
    ];
  }
}

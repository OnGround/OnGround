import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  constructor(private router: Router) {}
  location;
  productItems;
  products: any = [];
  wishlist: boolean = false;
  ngOnInit() {
    this.location = this.router.url;
    if (this.location.includes("accessories")) {
      this.productItems = "accessories";
      this.products = [
        {
          id: 1,
          name: "FOOTBALL",
          img: "/../assets/img/ball1.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 2,
          name: "FOOTBALL",
          img: "/../assets/img/ball1.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 3,
          name: "FOOTBALL",
          img: "/../assets/img/ball3.png",
          price: "8000 Rs",
          wishlist: true
        },
        {
          id: 4,
          name: "FOOTBALL",
          img: "/../assets/img/ball4.png",
          price: "8000 Rs",
          wishlist: true
        },
        {
          id: 5,
          name: "FOOTBALL",
          img: "/../assets/img/ball4.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 6,
          name: "FOOTBALL",
          img: "/../assets/img/ball4.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 7,
          name: "FOOTBALL",
          img: "/../assets/img/ball3.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 8,
          name: "FOOTBALL",
          img: "/../assets/img/ball1.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 9,
          name: "FOOTBALL",
          img: "/../assets/img/ball1.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 10,
          name: "FOOTBALL",
          img: "/../assets/img/ball4.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 11,
          name: "FOOTBALL",
          img: "/../assets/img/ball3.png",
          price: "8000 Rs"
        },
        {
          id: 12,
          name: "FOOTBALL",
          img: "/../assets/img/ball1.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 9,
          name: "FOOTBALL",
          img: "/../assets/img/ball1.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 10,
          name: "FOOTBALL",
          img: "/../assets/img/ball4.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 11,
          name: "FOOTBALL",
          img: "/../assets/img/ball3.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 12,
          name: "FOOTBALL",
          img: "/../assets/img/ball1.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 9,
          name: "FOOTBALL",
          img: "/../assets/img/ball1.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 10,
          name: "FOOTBALL",
          img: "/../assets/img/ball4.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 11,
          name: "FOOTBALL",
          img: "/../assets/img/ball3.png",
          price: "8000 Rs",
          wishlist: false
        },
        {
          id: 12,
          name: "FOOTBALL",
          img: "/../assets/img/ball1.png",
          price: "8000 Rs",
          wishlist: false
        }
      ];
    } else if (this.location.includes("apparel")) {
      this.productItems = "apparel";

      this.products = [
        {
          id: 1,
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 2,
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 3,
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 4,
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 5,
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 6,
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 7,
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 8,
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 9,
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 10,
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 11,
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 12,
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 9,
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 10,
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 11,
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 12,
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 9,
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 10,
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 11,
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 12,
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          wishlist: true
        }
      ];
    }
  }
  addtoWishlist(item) {
    item.wishlist = !item.wishlist;
  }
}

import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";

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
          type: "accessories",
          brand: "NIKE",
          wishlist: true
        },
        {
          id: 2,
          name: "FOOTBALL",
          img: "/../assets/img/ball1.png",
          price: "8000 Rs",
          type: "accessories",
          brand: "NIKE",
          wishlist: false
        },
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
    } else if (this.location.includes("apparel")) {
      this.productItems = "apparel";

      this.products = [
        {
          id: 1,
          brand: "NIKE",
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          type: "apparel",
          wishlist: true
        },
        {
          id: 2,
          brand: "NIKE",
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          type: "apparel",
          wishlist: true
        },
        {
          id: 3,
          brand: "NIKE",
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true,
          type: "apparel"
        },
        {
          id: 4,
          brand: "NIKE",
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          type: "apparel",
          wishlist: true
        },
        {
          id: 5,
          brand: "NIKE",
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          type: "apparel",
          wishlist: true
        },
        {
          id: 6,
          brand: "NIKE",
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          type: "apparel",
          wishlist: true
        },
        {
          id: 7,
          brand: "NIKE",
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          type: "apparel",
          wishlist: true
        },
        {
          id: 8,
          brand: "NIKE",
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          type: "apparel",
          wishlist: true
        },
        {
          id: 9,
          brand: "NIKE",
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          type: "apparel",
          wishlist: true
        },
        {
          id: 10,
          brand: "NIKE",
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          type: "apparel",
          wishlist: true
        },
        {
          id: 11,
          name: "SHOE",
          brand: "NIKE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          type: "apparel",
          wishlist: true
        },
        {
          id: 12,
          brand: "NIKE",
          name: "SHOE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          type: "apparel",
          wishlist: true
        },
        {
          id: 9,
          brand: "NIKE",
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          type: "apparel",
          wishlist: true
        },
        {
          id: 10,
          brand: "NIKE",
          name: "SHOE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          type: "apparel",
          wishlist: true
        },
        {
          id: 11,
          name: "SHOE",
          brand: "NIKE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true,
          type: "apparel"
        },
        {
          id: 12,
          name: "SHOE",
          brand: "NIKE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          wishlist: true,
          type: "apparel"
        },
        {
          id: 9,
          name: "SHOE",
          brand: "NIKE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 10,
          name: "SHOE",
          brand: "NIKE",
          img: "/../assets/img/shoe2.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 11,
          name: "SHOE",
          brand: "NIKE",
          img: "/../assets/img/shoe1.png",
          price: "Rs 8000",
          wishlist: true
        },
        {
          id: 12,
          name: "SHOE",
          brand: "NIKE",
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
  itemPage(item) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        item_id: item.id,
        item_name: item.name,
        item_img: item.img,
        item_price: item.price,
        item_type: item.type,
        item_wishlist: item.wishlist,
        item_brand: item.brand
      }
    };
    this.router.navigate(
      ["/" + item.type + "/products/productspecific"],
      navigationExtras
    );
  }
}

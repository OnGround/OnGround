import { Component, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-productspecific",
  templateUrl: "./productspecific.component.html",
  styleUrls: ["./productspecific.component.scss"]
})
export class ProductspecificComponent implements AfterViewInit {
  sub;
  id;
  img;
  name;
  price;
  type;
  leftheader;
  wishlist;
  brand;
  imagelist: any = [];
  images: any = [];
  slideIndex = 1;
  item: any = {};
  selectedColor = "";
  numberOfItems: any = [];
  relatedproducts: any = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.id = params["item_id"];
      this.name = params["item_name"];
      this.img = params["item_img"];
      this.price = params["item_price"];
      this.type = params["item_type"];
      this.wishlist = params["item_wishlist"];
      this.brand = params["item_brand"];
      this.wishlist = this.convertToBoolean(this.wishlist);
    });
    this.numberOfItems = ["1", "2", "3", "4", "5"];
    //call api to fetch data about a specific item
    this.item = {
      id: this.id,
      rating: "3",
      name: this.name,
      img: this.img,
      price: this.price,
      type: this.type,
      wishlist: this.wishlist,
      brand: this.brand,
      size: ["UK8", "UK7", "UK6", "UK5", "UK4"],
      description:
        "Incognito mode runs in a separate window from your normal Chrome windows.If you have an Incognito window open and you open another one, your private browsing session will continue in the new window. To exit Incognito mode, close all Incognito windows.If you see a number next to the Incognito icon at the top right, you have more than one Incognito window open. To close an Incognito window:",
      colors: [
        {
          name: "yellow",
          value: "#ffff00"
        },
        {
          name: "red",
          value: "#ff3300"
        },
        {
          name: "blue",
          value: "#0000ff"
        }
      ]
    };
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
    this.leftheader = this.name + "  " + this.type;
    this.imagelist = [
      { img: "/../assets/img/shoe2.png" },
      { img: "/../assets/img/football.png" },
      { img: "/../assets/img/shoe2.png" },
      { img: "/../assets/img/football.png" },
      { img: "/../assets/img/shoe2.png" }
    ];
    // var slides = document.querySelectorAll(".mySlides");
    // var slides12 = document.getElementsByClassName("mySlides");

    this.showSlides(this.slideIndex);
  }
  onChange(value) {
    this.selectedColor = value;
  }
  addtoWishlist(item) {
    item.wishlist = !item.wishlist;
  }
  addtoWishlist2(item) {
    item.wishlist = !item.wishlist;
  }
  convertToBoolean(input: string): boolean | undefined {
    try {
      return JSON.parse(input);
    } catch (e) {
      return undefined;
    }
  }
  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i]["style"]["display"] = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1]["style"]["display"] = "block";
    dots[this.slideIndex - 1].className += " active";
  }
  addtoCart(item) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        item_id: item.id,
        item_name: item.name,
        item_img: item.img,
        item_price: item.price
      }
    };
    this.router.navigate(
      ["/" + item.type + "/products/productspecific/cart"],
      navigationExtras
    );
  }
}

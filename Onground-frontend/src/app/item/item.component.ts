import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  sub;
  id;
  img;
  name;
  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.id = params["item_id"];
      this.name = params["item_name"];
      this.img = params["item_img"];
    });
  }
  onClickItem(details) {
    this.router.navigateByUrl("/" + details + "/products");
  }
}

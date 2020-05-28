import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-page-list",
  templateUrl: "./page-list.component.html",
  styleUrls: ["./page-list.component.css"],
})
export class PageListComponent implements OnInit {
  @Input() searchResult = [];
  @Input() searchLang = "";

  constructor() {}

  ngOnInit(): void {
    console.log("SearchLang in Page List => " + this.searchLang);
  }
}

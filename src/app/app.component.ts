import { Component } from "@angular/core";
import { WikipediaService } from "./wikipedia.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  pages = [];
  language = "";

  constructor(private wikipedia: WikipediaService) {}

  onSelectLang(value: string) {
    this.language = value;
  }

  onTerm(term: string) {
    this.wikipedia.search(term, this.language).subscribe((response: any) => {
      console.log(response);
      this.pages = response.query.search;
    });
  }
}

// https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space

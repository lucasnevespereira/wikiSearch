import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  @Output() language = new EventEmitter<string>();

  term: string = "";
  lang: string = "en";
  placeholder: string = "Enter a search term";

  constructor() {}

  ngOnInit(): void {}

  onSelectLang(value: string) {
    let selectedLang = value.toLowerCase();
    this.lang = selectedLang;
    if (this.lang == "fr") {
      this.placeholder = "Entrez votre recherche";
    } else {
      this.placeholder = "Enter a search term";
    }
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
    console.log(this.term);
    this.language.emit(this.lang);
    console.log(this.lang);
  }
}

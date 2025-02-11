import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class WikipediaService {
  // HttpClient here is a dependancy injection
  // Thanks to injectable decorator it will instance our class from common/http
  constructor(private http: HttpClient) {}

  search(term: string, lang: string) {
    return this.http.get(`https://${lang}.wikipedia.org/w/api.php`, {
      params: {
        action: "query",
        format: "json",
        list: "search",
        utf8: "1",
        srsearch: term,
        origin: "*",
      },
    });
  }
}

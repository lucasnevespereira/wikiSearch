import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class WikipediaService {
  // HttpClient here is a dependancy injection
  // Thanks to injectable decorator it will instance our class from common/http
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http.get(term);
  }
}

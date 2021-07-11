import { Injectable, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getNewsDataByID(lang)
  {
		const url = `assets/data/${lang}.json`;
		return this.httpClient.get(url);
  }

}

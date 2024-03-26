import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewservService {

  private url = 'https://ev-charge-finder.p.rapidapi.com/search-by-location';
  private headers = {
    'X-RapidAPI-Key': '29092b5eedmsh1716d23b0d120a8p18dad6jsna63338e0d13e',
    'X-RapidAPI-Host': 'ev-charge-finder.p.rapidapi.com'
  };

  constructor(private http: HttpClient) { }

  getLocationData(location:any,limit:any) {
    const params = {near: location, limit: limit.toString()}
    return this.http.get(this.url, { headers: this.headers, params });
  }
}

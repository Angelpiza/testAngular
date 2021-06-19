import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl = 'http://localhost:4000';
  constructor(private _http: HttpClient) { }
  getTypeRequest(url:any){
    return this._http.get(this.baseUrl + url)
  }
  postTypeRequest(url:any, name:any){
    return this._http.post(this.baseUrl + url,name)
  }
}

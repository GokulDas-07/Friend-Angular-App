import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  fetchFriend=()=>
  {
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }
}

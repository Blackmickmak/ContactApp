import { Injectable } from '@angular/core';
import { Http, Response, HttpModule, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {
  userId: string = '';
  token: string = '';
  constructor(private http: Http) { }
  getUser() {
    let urlSearch = window.location.search.substring(1);
    let query = urlSearch.split('&');
    this.token = query[0];
   // this.token = this.token.substring(this.token.indexOf('=') + 1);
    
    this.userId = query[1];
    //this.userId = this.userId.substring(this.userId.indexOf('=') + 1);

    sessionStorage.setItem('token', this.token);
    sessionStorage.setItem('userId', this.userId);

     XMLHttpRequest.prototype.setRequestHeader('auhtentication', sessionStorage.getItem('token'));
    XMLHttpRequest.prototype.setRequestHeader('userID', sessionStorage.getItem('userId'));
    

    //this.userId = this.token.
  }
}

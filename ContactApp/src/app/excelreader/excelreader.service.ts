import { Injectable } from '@angular/core';
import { Http, Response, HttpModule, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ExcelService {
  constructor(private http: Http) { }
}

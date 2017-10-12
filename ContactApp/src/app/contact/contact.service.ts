import { Injectable } from '@angular/core';
import { Http, Response,HttpModule,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ContactReqRes, Contact } from './../contact/contact';


@Injectable()
export class ContactService{
    contacts: Contact[];
    constructor(private http: Http) { }
  
    getContact(id: number) {
        let request: ContactReqRes = new ContactReqRes();
        request.id = id;
        this.http.post("/api/Contact/showContacts", request)
            .subscribe(res => {
                let response: ContactReqRes = res.json();
                this.contacts = response.contactList;
            })
    };
}

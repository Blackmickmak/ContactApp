import { Injectable } from '@angular/core';
import { Http, Response,HttpModule,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ContactReqRes, Contact } from './../contact/contact';
import { UserService } from '../user/user.service';


@Injectable()
export class ContactService{
  contacts: Contact[];
  copyContacts: Contact[];
  constructor(private http: Http, private userService: UserService) { }

  getUserId() {
    this.userService.getUser();
  }
  
  getContact(id: number) {
        let request: ContactReqRes = new ContactReqRes();
        request.id = id;
        this.http.post("/api/Contact/showContacts", request)
          .subscribe(res => {
            let response: ContactReqRes = res.json();
            let error: string = "";
            if (response.message.length > 0) {
              for (let er of response.message) {
                error += er + "\n";
              }
              alert("Error: " + error);
            } else {
              this.contacts = response.contactList;
              this.copyContacts = this.contacts
            }
          });
  };
  
  sortColumn(column: any) {
    console.log(column);
    
  }

  sort(){}
}

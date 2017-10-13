import { Component, Input } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
    selector: 'contact-app',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent {
    constructor(private contactService: ContactService){}

    @Input() id:number;

    getContact()
    {
        this.contactService.getContact(this.id);
    }
}

export class Contact {
    public id: number; 
    public title: string;
    public surname: string; 
    public givenName: string;
    public phone: string;
    public fax: string; 
    public street: string; 
    public city: string; 
    public state: string; 
    public postCode: string; 
    public country: string;
}

export class ContactReqRes {
    public id: number;
    public contactList:  Contact[];
}

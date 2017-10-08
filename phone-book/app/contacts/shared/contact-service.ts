import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { IContact } from './contact-model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import * as myGlobals from '../../shared/globals';

@Injectable()
export class ContactService {
    constructor(private http: Http) {

    }

    getContacts(userId: string): Observable<IContact[]> {
        return this.http.get(myGlobals.serviceRootUrl + 'Users(' + userId + ')' + '/Phonebook.MyContacts').map((response: Response) => {
            let contacts = <IContact[]>JSON.parse(response.text())['value'];
            return contacts;
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    getContact(id: string): Observable<IContact> {
        return this.http.get(myGlobals.serviceRootUrl + 'Contacts(' + id + ')').map((response: Response) => {
            return <IContact>response.json();
          }).catch(this.handleError);
    }

    createContact(contact: IContact): Observable<IContact> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(myGlobals.serviceRootUrl + 'Contacts', JSON.stringify(contact), options).map((response: Response) => {
            let contact = <IContact>response.json();
            return contact;
        }).catch(this.handleError);
    }

    updateContact(contact: IContact): Observable<IContact> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(myGlobals.serviceRootUrl + 'Contacts(' + contact.id + ')', JSON.stringify(contact), options).map((response: Response) => {
            let contact = <IContact>response.json();
            return contact;
        }).catch(this.handleError);
    }
}

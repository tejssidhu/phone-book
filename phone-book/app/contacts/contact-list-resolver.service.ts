import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ContactService, IContact } from './shared/index';
import { Observable } from 'rxjs/RX';

@Injectable()
export class ContactListResolver implements Resolve<IContact[]> {
    constructor(private contactService: ContactService) {

    }

    resolve(): Observable<IContact[]> {
        let contacts = this.contactService.getContacts('874C0BC3-6D9B-4DFA-B42C-8403FE1B281D');
        return contacts;
    }
}

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ContactService, IContact } from './shared/index';
import { Observable } from 'rxjs/RX';
import { AuthService } from '../user/shared/auth-service'

@Injectable()
export class ContactListResolver implements Resolve<IContact[]> {
    constructor(private contactService: ContactService, private authService: AuthService) {

    }

    resolve(): Observable<IContact[]> {
        let contacts = this.contactService.getContacts(this.authService.getUserId());
        return contacts;
    }
}

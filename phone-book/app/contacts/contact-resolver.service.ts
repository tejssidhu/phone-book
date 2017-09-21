import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ContactService } from './shared/contact-service';

@Injectable()
export class ContactResolver implements Resolve<any> {
    constructor(private contactService: ContactService) {

    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.contactService.getContact(route.params['id']);
    }
}
import { Component, Input } from '@angular/core';
import { IContact } from './shared/index';

@Component({
    selector: '[contact-thumbnail]',
    templateUrl: '/app/contacts/contact-thumbnail.component.html'
})

export class ContactThumbnailComponent {
    @Input() contact: IContact;
}

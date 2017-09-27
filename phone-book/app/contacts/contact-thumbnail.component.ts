import { Component, Input } from '@angular/core';
import { IContact } from './shared/index';

@Component({
    moduleId: module.id,
    selector: '[contact-thumbnail]',
    templateUrl: 'contact-thumbnail.component.html'
})

export class ContactThumbnailComponent {
    @Input() contact: IContact;
}

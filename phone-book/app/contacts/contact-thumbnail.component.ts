import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IContact, ContactService } from './shared/index';

@Component({
    moduleId: module.id,
    selector: '[contact-thumbnail]',
    templateUrl: 'contact-thumbnail.component.html'
})

export class ContactThumbnailComponent implements OnInit {
    @Input() contact: IContact;
    @Output() confirmDelete = new EventEmitter<string>();

    constructor() {

    }

    ngOnInit() {

    }

    deleteConfirm() {
        this.confirmDelete.emit(this.contact.id);
    }
}

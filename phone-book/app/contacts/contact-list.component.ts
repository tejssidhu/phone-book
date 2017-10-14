import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { IContact, ContactService } from './shared/index';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalComponent } from '../shared/index';
import { TOASTR_TOKEN, Toastr } from '../shared/index'
import { Observable, Subscription } from "rxjs/Rx";

@Component({
    moduleId: module.id,
    templateUrl: 'contact-list.component.html'
})

export class ContactListComponent implements OnInit {
    @ViewChild(ModalComponent) confirmModal: ModalComponent;
    contacts: IContact[];
    private subscription: Subscription;

    constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) {

    }

    ngOnInit() {
        this.contacts = this.route.snapshot.data['contacts'];
    }

    deleteConfirmation(id: string) {
        this.confirmModal.openModal();
        this.subscription = this.confirmModal.observable.subscribe(clicked => {
            if (clicked) {
                this.contactService.deleteContact(id).subscribe(
                    data => {
                        var contact = this.contacts.find(contact => contact.id === id);
                        contact.deleted = true;

                        this.toastr.success('Contact Deleted');
                    },
                    error => {
                        this.toastr.error('Something went wrong');
                    });;
            }
            this.subscription.unsubscribe();
        });
    }
}

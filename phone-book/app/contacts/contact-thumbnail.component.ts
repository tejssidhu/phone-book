import { Component, Input, ViewChild, Inject } from '@angular/core';
import { IContact, ContactService } from './shared/index';
import { ModalComponent } from '../shared/index';
import { Observable, Subscription } from "rxjs/Rx";
import { Router, ActivatedRoute } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../shared/index'

@Component({
    moduleId: module.id,
    selector: '[contact-thumbnail]',
    templateUrl: 'contact-thumbnail.component.html'
})

export class ContactThumbnailComponent {
    @ViewChild(ModalComponent) confirmModal: ModalComponent;
    @Input() contact: IContact;
    private subscription: Subscription;

    constructor(private contactService: ContactService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) {

    }

    deleteConfirm() {
        this.confirmModal.openModal();
        this.subscription = this.confirmModal.observable.subscribe(clicked => {
            if (clicked) {
                this.contactService.deleteContact(this.contact.id).subscribe(
                    data => {
                        //TODO: animate the removal of this item
                        this.router.navigate(['/contacts']);
                        this.toastr.success('Contact Deleted');
                    },
                    error => {
                        this.toastr.error('Something went wrong');
                    });;
            }
            console.log('observable called ' + clicked + ', id: ' + this.contact.id);
            this.subscription.unsubscribe();
        });
    }
}

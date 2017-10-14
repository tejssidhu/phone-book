import { Component, ViewChild, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IContact, ContactService } from '../shared/index';
import { ModalComponent } from '../../shared/index';
import { TOASTR_TOKEN, Toastr } from '../../shared/index'
import { Observable, Subscription } from "rxjs/Rx";

@Component({
    moduleId: module.id,
    templateUrl: 'contact-detail.component.html'
})

export class ContactDetailComponent {
    @ViewChild(ModalComponent) confirmModal: ModalComponent;
    contact: IContact;
    private subscription: Subscription;

    constructor(private route: ActivatedRoute,
        private contactService: ContactService,
        private router: Router,
        @Inject(TOASTR_TOKEN) private toastr: Toastr) {

    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.contact = data['contact'];
        });
    }

    deleteConfirmation() {
        this.confirmModal.openModal();
        this.subscription = this.confirmModal.observable.subscribe(clicked => {
            if (clicked) {
                this.contactService.deleteContact(this.contact.id).subscribe(
                    data => {
                        this.router.navigate(['/contacts']);
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

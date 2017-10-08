import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { IContact, ContactService } from '../shared/index';
import { AuthService } from '../../user/index';
import { TOASTR_TOKEN, Toastr } from '../../shared/index'

@Component({
    moduleId: module.id,
    templateUrl: 'add-contact.component.html'
})

export class AddContactComponent {
    contact: IContact;
    isNew: boolean;

    constructor(private route: ActivatedRoute,
        private contactService: ContactService,
        private authService: AuthService, 
        private router: Router,
        @Inject(TOASTR_TOKEN) private toastr: Toastr) {

    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            if (data['contact']) {
                this.contact = data['contact'];
                this.isNew = false;
            } else {
                this.contact = <IContact>{ title: '', forename: '', surname: '', email: '', userId: this.authService.getUserId() };
                this.isNew = true;
            }
        });
    }

    saveContact() {
        if (this.isNew) {
            this.contactService.createContact(this.contact).subscribe(
                data => {
                    this.router.navigate(['/contacts/contact', data.id]);
                    this.toastr.success('Contact Saved');
                },
                error => {
                    this.toastr.error('Something went wrong');
                });
        } else {
            this.contactService.updateContact(this.contact).subscribe(
                data => {
                    this.router.navigate(['/contacts/contact', data.id]);
                    this.toastr.success('Contact Updated');
                },
                error => {
                    this.toastr.error('Something went wrong');
                });
        }
    }
}

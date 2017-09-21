import {Component}from '@angular/core';

@Component({
    selector: 'contacts-app',
    template: `
        <nav-bar></nav-bar>
        <div class="contatiner">
            <router-outlet></router-outlet>
        </div>
    `
})
export class ContactsAppComponent {

}

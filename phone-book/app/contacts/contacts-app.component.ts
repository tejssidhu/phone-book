import {Component}from '@angular/core';

@Component({
    template: `
        <nav-bar></nav-bar>
        <div class="contatiner">
            <router-outlet></router-outlet>
        </div>
    `
})
export class ContactsAppComponent {

}

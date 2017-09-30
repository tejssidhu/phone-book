import { Component } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'home-app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `
})
export class HomeAppComponent {
    constructor() {
        
    }
}
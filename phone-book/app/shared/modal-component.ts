import { Component, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/RX'

@Component({
    moduleId: module.id,
    selector: 'modal-confirm',
    template: `
<div [hidden]="hideModal">
    <div id="modal-confirm" [ngClass]="{'modal': true, 'fade': true, 'in': !hideModal, 'out':hideModal}" role="dialog" style="display: block">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    Delete Confirmation
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete this?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn" (click)="confirm()">Confirm</button>
                    <button type="button" class="btn" (click)="cancel()">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</div>
`
})
export class ModalComponent {
    private hideModal: boolean = true;
    private clickStream = new Subject<boolean>();
    @Output() observable = this.clickStream.asObservable();

    constructor() {

    }

    openModal() {
        this.hideModal = false;
    }

    closeModal() {
        this.hideModal = true;
    }

    confirm() {
        this.hideModal = true;
        this.clickStream.next(true);
    }

    cancel() {
        this.hideModal = true;
        this.clickStream.next(false);
    }
}
import {Component, EventEmitter, Output} from '@angular/core';
import {ConfirmOptions, Position} from 'angular2-bootstrap-confirm';
import {Positioning} from 'angular2-bootstrap-confirm/position';

@Component({
    selector: 'delete',
    providers: [
        ConfirmOptions,
        {provide: Position, useClass: Positioning}
    ],
    template: `
        <button
                class="btn btn-default"
                mwlConfirm
                [title]="title"
                [message]="message"
                placement="left"
                (confirm)="deleteCourse()"
                (cancel)="cancelClicked = true"
                [(isOpen)]="isOpen">
            Delete
        </button>
    `
})
export class ConfirmDeleteComponent {
    @Output() onDelete = new EventEmitter();

    public title: string = 'Delete';
    public message: string = 'Do you really want to delete?';
    public confirmClicked: boolean = false;
    public cancelClicked: boolean = false;
    public isOpen: boolean = false;
}
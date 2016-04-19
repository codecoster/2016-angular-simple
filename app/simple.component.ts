import {Component} from "angular2/core"

/**
 * A simple component providing an input field, an output area and a toggle button
 */
@Component({
    selector: "simple-component",
    template: `
        <h1>Hello Angular 2!</h1>
        <div>
            <label [hidden]="!isCalling">I am {{name}}.</label>
            <div>
                <input [(ngModel)]="name" />
                <button (click)="toggleCalling()">toggle Calling</button>
            <div>
        </div>
        `
})
export class SimpleComponent {
    name = "here";
    private isCalling = true;

    private toggleCalling() {
        this.isCalling = !this.isCalling;
    }
}
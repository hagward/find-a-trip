import { Component, EventEmitter, Output } from '@angular/core';
import { LocationService } from '../services/location.service';

@Component({
    selector: 'location-input',
    providers: [LocationService],
    template: `
        <div class="location-input">
            <input type="text" #location (keyup)="onKey(location.value)" [(ngModel)]="input">
            <ul class="suggestions" *ngIf="suggestions">
                <li *ngFor="let suggestion of suggestions">
                    <a (click)="select(suggestion)">{{suggestion.name}}</a>
                </li>
            </ul>
        </div>
    `,
    styles: [
        `ul.suggestions { border: 1px solid rgba(0,0,0,.15); border-top: none; padding: 0; list-style: none; position: absolute; max-height: 300px; overflow-y: auto }`,
        `ul.suggestions > li > a { display: inline-block; padding: 10px; width: 100% }`,
        `ul.suggestions > li > a:hover { background-color: rgba(0,0,0,.15); cursor: pointer }`
    ]
})
export class LocationInputComponent {
    private input: string;
    private suggestions: any;

    @Output() selected: EventEmitter<string> = new EventEmitter();

    constructor(private locationService: LocationService) {}

    onKey(value: string) {
        if (value !== '') {
            this.locationService.search(value).then(suggestions => this.suggestions = suggestions);
        } else {
            this.suggestions = null;
        }

        this.selected.emit(null);
    }

    select(suggestion: any) {
        this.input = suggestion.name;
        this.suggestions = null;

        this.selected.emit(suggestion.id);
    }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { Location, LocationService } from '../services/location.service';

@Component({
    selector: 'location-input',
    template: `
        <div class="location-input">
            <input type="text" #location (keyup)="onKey(location.value)" [(ngModel)]="input">
            <ul class="location-suggestions" *ngIf="suggestions.length">
                <li *ngFor="let suggestion of suggestions">
                    <a (click)="select(suggestion)">{{suggestion.name}}</a>
                </li>
            </ul>
        </div>
    `
})
export class LocationInputComponent {
    private input: string;
    private suggestions: Location[] = [];

    @Output() selected: EventEmitter<string> = new EventEmitter();

    constructor(private locationService: LocationService) {}

    onKey(value: string) {
        if (value !== '') {
            this.locationService.search(value).then(suggestions => {
                this.suggestions = suggestions;
            });
        } else {
            this.suggestions = [];
        }

        this.selected.emit(null);
    }

    select(suggestion: any) {
        this.input = suggestion.name;
        this.suggestions = [];

        this.selected.emit(suggestion.id);
    }
}

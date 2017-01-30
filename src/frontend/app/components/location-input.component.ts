import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location, LocationService } from '../services/location.service';

@Component({
    selector: 'location-input',
    templateUrl: 'app/components/location-input.component.html'
})
export class LocationInputComponent {
    private input: string;
    private suggestions: Location[] = [];
    private timer: number = -1;

    @Input() placeholder: string;
    @Output() selected: EventEmitter<string> = new EventEmitter();

    constructor(private locationService: LocationService) {}

    onChange(value: string) {
        this.input = value;

        if (this.timer === -1) {
            this.timer = window.setTimeout(() => {
                if (this.input !== '') {
                    this.locationService.search(this.input).then(suggestions => {
                        this.suggestions = suggestions;
                    });
                } else {
                    this.suggestions = [];
                }

                this.selected.emit(null);
                this.timer = -1;
            }, 500);
        }
    }

    select(suggestion: any) {
        this.input = suggestion.name;
        this.suggestions = [];

        this.selected.emit(suggestion.id);
    }
}

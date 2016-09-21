import { Component, EventEmitter, Output } from '@angular/core';
import { Location, LocationService } from '../services/location.service';

@Component({
    selector: 'location-input',
    templateUrl: 'app/components/location-input.component.html'
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

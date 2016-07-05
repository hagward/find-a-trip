import { Component } from '@angular/core';
import { TripDetailsComponent } from './trip-details.component';
import { SearchResult } from './search-result';

@Component({
    selector: 'trip',
    directives: [TripDetailsComponent],
    template: `
        <label>From: <input/></label>
        <label>To: <input/></label>
        <button>Search</button>
        <trip-details *ngIf="searchResult"></trip-details>
        `
})
export class TripComponent {
    searchResult: SearchResult;
}
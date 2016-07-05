import { Component } from '@angular/core';
import { SearchResultComponent } from './search-result.component';
import { Trip } from './trip';

@Component({
    selector: 'search',
    directives: [SearchResultComponent],
    template: `
        <label>From: <input/></label>
        <label>To: <input/></label>
        <button>Search</button>
        <search-result *ngIf="trips"></search-result>
        `
})
export class SearchComponent {
    trips: Trip[];
}

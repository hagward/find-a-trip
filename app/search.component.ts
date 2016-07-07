import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Trip } from './trip';

@Component({
    selector: 'search',
    providers: [SearchService],
    template: `
        <label>From: <input/></label>
        <label>To: <input/></label>
        <button (click)="search()">Search</button>
        <ul class="trip-list" *ngIf="trips">
            <li *ngFor="let trip of trips">
                {{trip.legs[0].name}}
            </li>
        </ul>
        `
})
export class SearchComponent {
    trips: Trip[];

    constructor(private searchService: SearchService) { }

    search() {
        this.searchService.search().then(trips => {
            this.trips = trips;
        });
    }
}

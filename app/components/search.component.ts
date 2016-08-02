import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Trip } from '../trip';

@Component({
    selector: 'search',
    providers: [SearchService],
    template: `
        <label>From: <input/></label>
        <label>To: <input/></label>
        <button (click)="search()">Search</button>
        <ul class="trip-list" *ngIf="trips">
            <li *ngFor="let trip of trips">
                <span class="column">{{trip.legs[0].origin.date | date:'shortTime'}}</span>
                <span class="column">{{trip.legs[trip.legs.length-1].destination.date | date:'shortTime'}}</span>
                <span class="column">
                    <span *ngFor="let leg of trip.legs">{{leg.name}}</span>
                </span>
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

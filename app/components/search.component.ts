import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SearchService } from '../services/search.service';

@Component({
    selector: 'search',
    providers: [AuthService, SearchService],
    template: `
        <label>From: <input/></label>
        <label>To: <input/></label>
        <button (click)="search()">Search</button>
        <ul class="trip-list" *ngIf="trips">
            <li *ngFor="let trip of trips">
                <div *ngIf="trip.Leg.length">
                    <span class="column">{{trip.Leg[0].Origin.date}}</span>
                    <span class="column">{{trip.Leg[0].Origin.name}}</span>

                    <span class="column">{{trip.Leg[trip.Leg.length-1].Destination.date}}</span>
                    <span class="column">{{trip.Leg[trip.Leg.length-1].Destination.name}}</span>

                    <span class="column">
                        <span *ngFor="let leg of trip.Leg">{{leg.name}}</span>
                    </span>
                </div>

                <div *ngIf="!trip.Leg.length">
                    <span class="column">{{trip.Leg.Origin.date}}</span>
                    <span class="column">{{trip.Leg.Origin.name}}</span>

                    <span class="column">{{trip.Leg.Destination.date}}</span>
                    <span class="column">{{trip.Leg.Destination.name}}</span>

                    <span class="column">{{trip.Leg.name}} ({{trip.Leg.direction}})</span>
                </div>
            </li>
        </ul>
        `
})
export class SearchComponent {
    trips: any;

    constructor(private authService: AuthService, private searchService: SearchService) { }

    search() {
        // this.authService
        //     .authorize('https://api.vasttrafik.se/token', 'key', 'secret')
        //     .subscribe(response => console.log('response:', response),
        //                error => console.log('error:', error));

        this.searchService.search().then(trips => {
            this.trips = trips;
        });
    }
}

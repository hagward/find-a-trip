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
        <div class="trip-list" *ngIf="trips">
            <div class="header-row">
                <span class="col-2">Startdatum</span>
                <span class="col-2">Startdest.</span>
                <span class="col-2">Slutdatum</span>
                <span class="col-2">Slutdest.</span>
                <span class="col-4">Färdmedel</span>
            </div>

            <div *ngFor="let trip of trips">
                <div class="row" *ngIf="trip.Leg.length">
                    <span class="col-2">{{trip.Leg[0].Origin.date}}</span>
                    <span class="col-2">{{trip.Leg[0].Origin.name}}</span>

                    <span class="col-2">{{trip.Leg[trip.Leg.length-1].Destination.date}}</span>
                    <span class="col-2">{{trip.Leg[trip.Leg.length-1].Destination.name}}</span>

                    <span class="col-4">
                        <span *ngFor="let leg of trip.Leg">{{leg.name}}</span>
                    </span>
                </div>

                <div class="row" *ngIf="!trip.Leg.length">
                    <span class="col-2">{{trip.Leg.Origin.date}}</span>
                    <span class="col-2">{{trip.Leg.Origin.name}}</span>

                    <span class="col-2">{{trip.Leg.Destination.date}}</span>
                    <span class="col-2">{{trip.Leg.Destination.name}}</span>

                    <span class="col-4">{{trip.Leg.name}} ({{trip.Leg.direction}})</span>
                </div>
            </div>
        </div>
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

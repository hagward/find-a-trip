import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SearchService, SearchOptions } from '../services/search.service';

@Component({
    selector: 'search',
    providers: [AuthService, SearchService],
    template: `
        <label>From: <input type="text" [(ngModel)]="model.from"></label>
        <label>To: <input type="text" [(ngModel)]="model.to"></label>
        <button (click)="search()">Search</button>
        <div class="trip-list" *ngIf="trips">
            <div class="header-row">
                <span class="col-2 text-center">Starttid</span>
                <span class="col-2">Startdest.</span>
                <span class="col-2 text-center">Sluttid</span>
                <span class="col-2">Slutdest.</span>
                <span class="col-4">Färdmedel</span>
            </div>

            <div *ngFor="let trip of trips">
                <div class="row" *ngIf="trip.Leg.length">
                    <span class="col-2 text-center">{{trip.Leg[0].Origin.time}}</span>
                    <span class="col-2">{{trip.Leg[0].Origin.name}}</span>

                    <span class="col-2 text-center">{{trip.Leg[trip.Leg.length-1].Destination.time}}</span>
                    <span class="col-2">{{trip.Leg[trip.Leg.length-1].Destination.name}}</span>

                    <span class="col-4">
                        <span *ngFor="let leg of trip.Leg">{{leg.name}}</span>
                    </span>
                </div>

                <div class="row" *ngIf="!trip.Leg.length">
                    <span class="col-2 text-center">{{trip.Leg.Origin.time}}</span>
                    <span class="col-2">{{trip.Leg.Origin.name}}</span>

                    <span class="col-2 text-center">{{trip.Leg.Destination.time}}</span>
                    <span class="col-2">{{trip.Leg.Destination.name}}</span>

                    <span class="col-4">{{trip.Leg.name}} ({{trip.Leg.direction}})</span>
                </div>
            </div>
        </div>
        `
})
export class SearchComponent {
    trips: any;
    model: SearchOptions;

    constructor(private authService: AuthService, private searchService: SearchService) {
        this.model = {
            authToken: '',
            from: '',
            to: '',
            date: new Date()
        };
    }

    search() {
        this.authService.authorize().then(token => {
            this.model.authToken = '' + token;
            this.searchService.search(this.model).then(trips => {
                this.trips = trips;
            });
        })
    }
}

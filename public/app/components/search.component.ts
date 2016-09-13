import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SearchService, SearchOptions } from '../services/search.service';
import { LocationInputComponent } from './location-input.component';

@Component({
    selector: 'search',
    providers: [AuthService, SearchService],
    directives: [LocationInputComponent],
    template: `
        <form>
            <div class="search-row">
                <div class="left-input">
                    <label for="inputOrigin">Från</label>
                    <location-input id="inputOrigin" (selected)="model.originId=$event"></location-input>
                </div>
                <div class="mid-input">
                    <label for="inputDestination">Till</label>
                    <location-input id="inputDestination" (selected)="model.destinationId=$event"></location-input>
                </div>
                <div class="mid-input">
                    <label for="inputDatetime">När</label>
                    <div>
                        <input type="datetime-local" id="inputDatetime" [(ngModel)]="model.datetime">
                    </div>
                </div>
                <div class="right-input">
                    <div>&nbsp;</div>
                    <input type="button" class="right-input" (click)="search()" value="Search">
                </div>
            </div>
        </form>
        <div class="trip=list" *ngIf="trips">
            <div class="header-row">
                <div class="col-3 text-center">Avgångstid</div>
                <div class="col-3 text-center">Ankomsttid</div>
                <div class="col-6">Färdmedel</div>
            </div>
            <div class="row" *ngFor="let trip of trips">
                <div class="col-3 text-center">{{trip.Leg[0].Origin.time}}</div>
                <div class="col-3 text-center">{{trip.Leg[trip.Leg.length-1].Destination.time}}</div>
                <div class="col-6">
                    <span *ngFor="let leg of trip.Leg; let i=index">
                        <span *ngIf="i">&rarr;</span>
                        {{leg.name}}
                        <span *ngIf="leg.direction">({{leg.direction}})</span>
                    </span>
                </div>
            </div>
        </div>
        `
})
export class SearchComponent {
    trips: any;
    model: any;

    constructor(private authService: AuthService, private searchService: SearchService) {
        this.model = {
            originId: '',
            destinationId: '',

            // Ex: '2016-09-04T21:24'.
            datetime: new Date().toLocaleString('sv-SE').replace(' ', 'T').substr(0, 16)
        };
    }

    search() {
        console.log(this.model);

        const searchOptions = {
            originId: this.model.originId,
            destId: this.model.destinationId,
            date: this.model.datetime.substr(0, 10),
            time: this.model.datetime.substr(11, 5)
        };

        this.searchService.search(searchOptions).then(trips => {
            this.trips = trips;
        });
    }
}

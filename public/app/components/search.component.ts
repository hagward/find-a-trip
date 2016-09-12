import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SearchService, SearchOptions } from '../services/search.service';
import { LocationInputComponent } from './location-input.component';

@Component({
    selector: 'search',
    providers: [AuthService, SearchService],
    directives: [LocationInputComponent],
    template: `
        <form class="form">
            <div class="row">
                <div class="form-group col-md-4">
                    <label for="inputOrigin">Från</label>
                    <location-input class="form-control" id="inputOrigin" (selected)="model.originId=$event"></location-input>
                </div>
                <div class="form-group col-md-4">
                    <label for="inputDestination">Till</label>
                    <location-input class="form-control" id="inputDestination" (selected)="model.destinationId=$event"></location-input>
                </div>
                <div class="form-group col-md-4">
                    <label for="inputDatetime">När</label>
                    <input type="datetime-local" class="form-control" id="inputDatetime" [(ngModel)]="model.datetime">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <button class="btn btn-primary" (click)="search()">Search</button>
                </div>
            </div>
        </form>
        <table class="table" *ngIf="trips">
            <thead>
                <tr>
                    <th>Avgångstid</th>
                    <th>Ankomsttid</th>
                    <th>Färdmedel</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let trip of trips">
                    <td>{{trip.Leg[0].Origin.time}}</td>
                    <td>{{trip.Leg[trip.Leg.length-1].Destination.time}}</td>
                    <td>
                        <span *ngFor="let leg of trip.Leg; let i=index">
                            <span *ngIf="i">&rarr;</span>
                            {{leg.name}}
                            <span *ngIf="leg.direction">({{leg.direction}})</span>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
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

import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class SearchService {
    constructor(private http: Http, private authService: AuthService) {}

    search(options: SearchOptions) {
        return new Promise((resolve, reject) => {
            this.authService.authorize().then(authToken => {
                const headers = new Headers({ 'Authorization': 'Bearer ' + authToken });
                const requestOptions = new RequestOptions({ headers: headers });

                const url = 'https://api.vasttrafik.se/bin/rest.exe/v2/trip'
                    + '?originId=' + encodeURIComponent(options.originId)
                    + '&destId=' + encodeURIComponent(options.destId)
                    + '&date=' + encodeURIComponent(options.date)
                    + '&time=' + encodeURIComponent(options.time)
                    + '&format=json';

                console.log('Search URL:', url);

                this.http.get(url, requestOptions).subscribe(response => {
                    const json = response.json();
                    console.log('JSON response:', json);

                    const trips = json.TripList.Trip || [];
                    trips.forEach((trip: any) => {
                        if (!trip.Leg.length) {
                            // Ensure that trip.Leg is always an array.
                            trip.Leg = [trip.Leg];
                        }
                    });
                    resolve(trips);
                });
            });
        });
    }
}

export interface SearchOptions {
    originId: string;
    destId: string;
    date: string;
    time: string;
}

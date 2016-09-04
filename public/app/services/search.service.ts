import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

@Injectable()
export class SearchService {
    constructor(private http: Http) {}

    search(options: SearchOptions) {
        return new Promise((resolve, reject) => {
            const headers = new Headers({ 'Authorization': 'Bearer ' + options.authToken });
            const requestOptions = new RequestOptions({ headers: headers });

            const isoDate = options.date.toISOString();
            const date = isoDate.substr(0, 10);
            const time = isoDate.substr(11, 5);

            const url = 'https://api.vasttrafik.se/bin/rest.exe/v2/trip'
                + '?originId=' + encodeURIComponent(options.originId)
                + '&destId=' + encodeURIComponent(options.destId)
                + '&date=' + encodeURIComponent(date)
                + '&time=' + encodeURIComponent(time)
                + '&format=json';

            console.log('Search URL:', url);

            this.http.get(url, requestOptions).subscribe(response => {
                const trips = response.json().TripList.Trip;
                trips.forEach((trip: any) => {
                    if (!trip.Leg.length) {
                        // Ensure that trip.Leg is always an array.
                        trip.Leg = [trip.Leg];
                    }
                });
                resolve(trips);
            });
        });
    }
}

export interface SearchOptions {
    authToken: string;
    originId: string;
    destId: string;
    date: Date;
}

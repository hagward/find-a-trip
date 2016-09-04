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
                + '?originCoordName=' + options.from
                + '&destCoordName=' + options.to
                + '&date=' + date
                + '&time=' + time
                + '&format=json';

            this.http.get(url, requestOptions).subscribe(response => {
                resolve(response.json().TripList.Trip);
            });
        });
    }
}

export interface SearchOptions {
    authToken: string;
    from: string;
    to: string;
    date: Date;
}

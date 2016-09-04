import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

@Injectable()
export class LocationService {
    constructor(private http: Http) {}

    search(authToken: string, input: string) {
        return new Promise((resolve, reject) => {
            const headers = new Headers({ 'Authorization': 'Bearer ' + authToken });
            const requestOptions = new RequestOptions({ headers: headers });

            const url = 'https://api.vasttrafik.se/bin/rest.exe/v2/location.name'
                + '?input=' + encodeURIComponent(input)
                + '&format=json';

            this.http.get(url, requestOptions).subscribe(response => {
                resolve(response.json().LocationList.StopLocation);
            });
        });
    }
}

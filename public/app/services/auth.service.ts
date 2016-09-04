import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {
    constructor(private http: Http) {}

    authorize() {
        return new Promise((resolve, reject) => {
            this.http.get('/token').subscribe(response => {
                resolve(response.json().access_token);
            });
        });
    }
}

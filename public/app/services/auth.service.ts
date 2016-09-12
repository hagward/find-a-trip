import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {
    private expires: number;
    private token: string;

    constructor(private http: Http) {}

    authorize() {
        return new Promise((resolve, reject) => {
            if (Date.now() < this.expires) {
                resolve(this.token);
            } else {
                this.http.get('/token').subscribe(response => {
                    const json = response.json();
                    this.expires = Date.now() + Number(json.expires_in) * 1000;
                    this.token = json.access_token;
                    resolve(this.token);
                });
            }
        });
    }
}

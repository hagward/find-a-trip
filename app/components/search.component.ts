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
        `
})
export class SearchComponent {
    trips: any;

    constructor(private authService: AuthService, private searchService: SearchService) { }

    search() {
        this.authService
            .authorize('https://api.vasttrafik.se/token', 'key', 'secret')
            .subscribe(response => console.log('response:', response),
                       error => console.log('error:', error));

        this.searchService.search().then(trips => {
            this.trips = trips;
        });
    }
}

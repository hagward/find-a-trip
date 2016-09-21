import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SearchService, SearchOptions } from '../services/search.service';
import { LocationInputComponent } from './location-input.component';

@Component({
    selector: 'search',
    entryComponents: [LocationInputComponent],
    templateUrl: 'app/components/search.component.html'
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

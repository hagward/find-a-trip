import { Component } from '@angular/core';
import { TripComponent } from './trip.component';

@Component({
    selector: 'vasttrafik',
    directives: [TripComponent],
    template: `
        <h1>Find trip</h1>
        <trip></trip>
        `
})
export class AppComponent { }

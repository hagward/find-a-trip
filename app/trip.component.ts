import { Component } from '@angular/core';

@Component({
    selector: 'trip',
    template: `
        <label>From: <input/></label>
        <label>To: <input/></label>
        <button>Search</button>
        `
})
export class TripComponent { }
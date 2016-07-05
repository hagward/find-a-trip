import { Component } from '@angular/core';
import { SearchComponent } from './search.component';

@Component({
    selector: 'vasttrafik',
    directives: [SearchComponent],
    template: `
        <h1>Find trip</h1>
        <search></search>
        `
})
export class AppComponent { }

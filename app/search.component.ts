import { Component } from '@angular/core';
import { SearchResultComponent } from './search-result.component';
import { SearchResult } from './search-result';

@Component({
    selector: 'search',
    directives: [SearchResultComponent],
    template: `
        <label>From: <input/></label>
        <label>To: <input/></label>
        <button>Search</button>
        <search-result *ngIf="searchResult"></search-result>
        `
})
export class SearchComponent {
    searchResult: SearchResult;
}

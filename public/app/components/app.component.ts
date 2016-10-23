import { Component } from '@angular/core';
import { SearchComponent } from './search.component';

@Component({
    selector: 'app',
    entryComponents: [SearchComponent],
    template: `<search></search>`
})
export class AppComponent {}

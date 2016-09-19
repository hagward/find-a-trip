import { Component } from '@angular/core';
import { SearchComponent } from './search.component';

@Component({
    selector: 'app',
    entryComponents: [SearchComponent],
    template: `
        <div class="main-container">
            <search></search>
        </div>
        `
})
export class AppComponent {}

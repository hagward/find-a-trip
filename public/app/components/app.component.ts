import { Component } from '@angular/core';
import { SearchComponent } from './search.component';

@Component({
    selector: 'app',
    directives: [SearchComponent],
    template: `
        <div class="container">
            <search></search>
        </div>
        `
})
export class AppComponent { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from '../components/app.component';
import { LocationInputComponent } from '../components/location-input.component';
import { SearchComponent } from '../components/search.component';

import { AuthService } from '../services/auth.service';
import { LocationService } from '../services/location.service';
import { SearchService } from '../services/search.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        LocationInputComponent,
        SearchComponent
    ],
    providers: [
        AuthService,
        LocationService,
        SearchService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}

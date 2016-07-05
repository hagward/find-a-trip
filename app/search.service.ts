import { Injectable } from '@angular/core';
import { TRIPS } from './mock-trips';

@Injectable()
export class SearchService {
    search() {
        return Promise.resolve(TRIPS);
    }
}

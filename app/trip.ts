export class Trip {
    legs: Leg[];
    // travelTime: number;

    // getTravelTime(): number {
    //     if (!this.travelTime) {
    //         this.travelTime = this.legs
    //             .map(leg => leg.destination.date.valueOf() - leg.origin.date.valueOf())
    //             .reduce((prev, curr) => prev + curr);
    //     }
    //     return this.travelTime;
    // }
}

class Leg {
    name: string;
    type: string;
    id: string;
    direction: string;
    origin: Place;
    destination: Place;
}

class Place {
    name: string;
    type: string;
    id: string;
    routeIndex: string;
    date: Date;
    track: string;
}

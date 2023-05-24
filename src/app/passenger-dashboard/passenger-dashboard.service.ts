import { HttpClient } from "@angular/common/http";
import { Passenger } from "./models/passenger.interfase";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

const PASSENGER_API: string = './assets/data/db.json';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {
    console.log(http);
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_API)
      .pipe(
        map((response: any) => response.passengers)
      );
  }
}

import {Component,OnInit} from "@angular/core";
import { Passenger } from "../../models/passenger.interfase";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
@Component({
    selector:'passenger-dashboard',
    styleUrls:['pasenger-dashboard.component.css'],
    template:`
    <div>
    <passenger-count [items]="passengers"></passenger-count>
    <h1>Passenger Details</h1>
    <div *ngFor="let passenger of passengers">
      {{passenger.name}}
    </div>
    <ul>
    <passenger-details *ngFor="let passenger of passengers" [detail]="passenger" (removePass)="removePass($event)" (editPass)="editPass($event)"></passenger-details>
    </ul>  
    </div>
    `
})
export class PassengerDashboardComponent implements OnInit{
    passengers!: Passenger[];
    constructor(private passengerService:PassengerDashboardService){

    }
    ngOnInit(): void {
        this.passengers=this.passengerService.getPassengers();  
    }
    editPass(passengerEdit:Passenger){
      this.passengers=this.passengers.map((passenger:Passenger)=>{
        if(passenger.id===passengerEdit.id)
        {
          passenger=Object.assign({},passenger,passengerEdit);
        }
        return passenger;
      });
    }
    removePass(passenger:Passenger){
      this.passengers=this.passengers.filter((passengr:Passenger)=>{
        return passengr.id!==passenger.id;
      })
    }
}
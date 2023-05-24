import {Component,OnInit} from "@angular/core";
import { Passenger } from "../../models/passenger.interfase";
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
    constructor(){}
    ngOnInit(): void {
        this.passengers=[
            {
              id:1,
              name:"Umang",
              status:true,
              checkedIn:1490742000000,
              children:null
            },
            {
              id:2,
              name:"Bhavin",
              status:false,
              children:[{name:"Umang",age:22}]
            },
            {
              id:3,
              name:"Jenish",
              status:true,
              checkedIn:17102004,
              children:[{name:"Jenish",age:22},{name:"Bhavin",age:23}]
            },
            {
              id:4,
              name:"Dharmil",
              status:true,
              checkedIn:17102020,
              children:null
            }
          ];           
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
import {Component,OnInit} from "@angular/core";
import { Passenger } from "../../models/passenger.interfase";
@Component({
    selector:'passenger-dashboard',
    styleUrls:['pasenger-dashboard.component.css'],
    template:`
    <div>
    <passenger-count [items]="passengers"></passenger-count>
    <h1>Passenger Details</h1>
    <ul>
    <passenger-details *ngFor="let passenger of passengers" [detail]="passenger"></passenger-details>
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
}
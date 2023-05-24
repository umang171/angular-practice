import { Passenger } from "./models/passenger.interfase";

export class PassengerDashboardService{
    constructor(){

    }
    getPassengers():Passenger[]{
        return [
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
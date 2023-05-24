import {Component, Input} from '@angular/core';
import { Passenger } from '../../models/passenger.interfase';

@Component({
    selector:'passenger-count',
    template:`
    <h1>Airline Passengers</h1>
    <h4>Passenger Count:{{checkedInCount()}}/{{items.length}}</h4>
    `
})
export class PassengerCountComponent{
    @Input()
    items!:Passenger[];
    checkedInCount():number{
        if(!this.items)return 0;
        return this.items.filter((passenger:Passenger)=>passenger.checkedIn).length;
    }
}
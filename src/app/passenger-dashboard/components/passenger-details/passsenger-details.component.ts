import {Component, EventEmitter, Input, Output,OnChanges, SimpleChanges} from '@angular/core';
import { Passenger } from '../../models/passenger.interfase';

@Component({
    selector:'passenger-details',
    styleUrls:['passenger-details.component.css'],
    template:`
        <li class="border border-1 mt-1">
        <span class="bg-red rounded-circle px-2" [ngClass]="{'checked-in':detail.status}"></span> {{detail.id}} 
        <div *ngIf="isEdit"><input [value]="detail.name" (input)=onNameChange(user.value) #user></div>
        <div *ngIf="!isEdit">{{detail.name}}</div>
        <div>{{detail.checkedIn|date:"y MMMM d"}}</div>
        <div>Children-{{detail.children?.length||0}}</div>
        <button (click)="toggleEdit()" class="btn btn-info">{{!isEdit?"Edit":"Done"}}</button>
        <button (click)="removePas()" class="btn btn-info ms-2">Delete</button>
        </li>
    `
})
export class PassengerDetailsComponent implements OnChanges{
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }
    @Input()
    detail!: Passenger;
    isEdit:boolean=false;

    @Output()
    editPass:EventEmitter<Passenger>=new EventEmitter();
    @Output()
    removePass:EventEmitter<Passenger>=new EventEmitter();

    onNameChange(name:string){
        this.detail.name=name;
    }
    toggleEdit(){
        if(this.isEdit)
            this.editPass.emit(this.detail);
        this.isEdit=!this.isEdit;
    }
    removePas(){
        this.removePass.emit(this.detail);
    }
}
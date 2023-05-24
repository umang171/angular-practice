import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common'
import { PassengerDashboardComponent } from './container/passenger-dashboard/passenger-dashboard.component'
import {PassengerCountComponent } from './components/passenger-count/passenger-count.component'
import { PassengerDetailsComponent } from './components/passenger-details/passsenger-details.component'
@NgModule({
    declarations:[
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailsComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        PassengerDashboardComponent
    ]
})
export class PassengerDashboardModule{}
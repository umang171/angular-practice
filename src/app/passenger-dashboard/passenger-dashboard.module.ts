import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
// container component
import { PassengerDashboardComponent } from './container/passenger-dashboard/passenger-dashboard.component'
// component
import {PassengerCountComponent } from './components/passenger-count/passenger-count.component'
import { PassengerDetailsComponent } from './components/passenger-details/passsenger-details.component'
// service
import { PassengerDashboardService } from './passenger-dashboard.service'
@NgModule({
    declarations:[
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailsComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule
    ],
    exports:[
        PassengerDashboardComponent
    ],
    providers:[
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule{}
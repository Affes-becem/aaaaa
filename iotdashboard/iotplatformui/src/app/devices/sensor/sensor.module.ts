import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


import {ListSensorComponent} from '@app/devices/sensor/list-sensor/list-sensor.component';
import {CreateSensorComponent} from '@app/devices/sensor/create-sensor/create-sensor.component';
import {UpdateSensorComponent} from '@app/devices/sensor/update-sensor/update-sensor.component';
import {SensorDetailsComponent} from '@app/devices/sensor/sensor-details/sensor-details.component';

import {SensorRoutingModule} from '@app/devices/sensor/sensor-routing.module';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    SensorRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [
    ListSensorComponent,
    CreateSensorComponent,
    UpdateSensorComponent,
    SensorDetailsComponent
  ]

})

export class SensorModule {

}

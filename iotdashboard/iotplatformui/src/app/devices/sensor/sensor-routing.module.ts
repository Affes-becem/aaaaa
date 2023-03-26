import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListSensorComponent} from '@app/devices/sensor/list-sensor/list-sensor.component';
import {CreateSensorComponent} from '@app/devices/sensor/create-sensor/create-sensor.component';
import {UpdateSensorComponent} from '@app/devices/sensor/update-sensor/update-sensor.component';
import {SensorDetailsComponent} from '@app/devices/sensor/sensor-details/sensor-details.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sensors'
    },
    children: [
      {
        path: '',
        redirectTo: 'sensors'
      },
      {
        path: 'sensors',
        component: ListSensorComponent,
        data: {
          title: 'Sensors'
        }
      }, {
        path: 'list/:id/:state',
        component: ListSensorComponent,
        data: {
          title: 'Sensors'
        }
      },
      {
        path: 'add',
        component: CreateSensorComponent,
        data: {
          title: 'Add'
        }
      },
      {
        path: 'update/:id',
        component: UpdateSensorComponent,
        data: {
          title: 'Update'
        }
      },
      {
        path: 'details/:id',
        component: SensorDetailsComponent,
        data: {
          title: 'Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorRoutingModule {
}



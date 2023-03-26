import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListGatewayComponent} from '@app/devices/gateway/list-gateway/list-gateway.component';
import {CreateGatewayComponent} from '@app/devices/gateway/create-gateway/create-gateway.component';
import {UpdateGatewayComponent} from '@app/devices/gateway/update-gateway/update-gateway.component';
import {GatewayDetailsComponent} from '@app/devices/gateway/gateway-details/gateway-details.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gateways'
    },
    children: [
      {
        path: '',
        redirectTo: 'gateways'
      },
      {
        path: 'gateways',
        component: ListGatewayComponent,
        data: {
          title: 'Gateways'
        }
      },
      {
        path: 'add',
        component: CreateGatewayComponent,
        data: {
          title: 'Add'
        }
      },
      {
        path: 'update/:id',
        component: UpdateGatewayComponent,
        data: {
          title: 'Update'
        }
      },
      {
        path: 'details/:id',
        component: GatewayDetailsComponent,
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
export class GatewayRoutingModule {
}



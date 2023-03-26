import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


import {ListGatewayComponent} from '@app/devices/gateway/list-gateway/list-gateway.component';
import {CreateGatewayComponent} from '@app/devices/gateway/create-gateway/create-gateway.component';
import {UpdateGatewayComponent} from '@app/devices/gateway/update-gateway/update-gateway.component';
import {GatewayDetailsComponent} from '@app/devices/gateway/gateway-details/gateway-details.component';

import {GatewayRoutingModule} from '@app/devices/gateway/gateway-routing.module';


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
    GatewayRoutingModule,
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
    ListGatewayComponent,
    CreateGatewayComponent,
    UpdateGatewayComponent,
    GatewayDetailsComponent
  ]

})

export class GatewayModule {

}

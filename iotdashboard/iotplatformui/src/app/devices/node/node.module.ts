import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


import {ListNodeComponent} from '@app/devices/node/list-node/list-node.component';
import {CreateNodeComponent} from '@app/devices/node/create-node/create-node.component';
import {UpdateNodeComponent} from '@app/devices/node/update-node/update-node.component';
import {NodeDetailsComponent} from '@app/devices/node/node-details/node-details.component';

import {NodeRoutingModule} from '@app/devices/node/node-routing.module';


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
    NodeRoutingModule,
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
    ListNodeComponent,
    CreateNodeComponent,
    UpdateNodeComponent,
    NodeDetailsComponent
  ]

})

export class NodeModule {

}

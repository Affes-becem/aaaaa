import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ConnectorComponent} from '@app/Connector/connector/connector.component';
import {SearchedConnectorComponent} from '@app/Connector/searched-connector/searched-connector.component';
import {SensorDataStreamingComponent} from '@app/Streaming/sensor-data-streaming/sensor-data-streaming.component';
import {ListStoredConnectorsComponent} from '@app/Connector/list-stored-connectors/list-stored-connectors.component';
import {ListRunningConnectorsComponent} from '@app/Connector/list-running-connectors/list-running-connectors.component';
import {ConnectorStatusComponent} from '@app/Connector/connector-status/connector-status.component';
import {UpdateConnectorComponent} from '@app/Connector/update-connector/update-connector.component';
import {ConnectorRoutingModule} from '@app/Connector/connector-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({

  imports: [CommonModule,
    ReactiveFormsModule,
    ConnectorRoutingModule, MatFormFieldModule, MatInputModule],
  declarations: [ConnectorComponent,
    SearchedConnectorComponent,
    ListRunningConnectorsComponent,
    SensorDataStreamingComponent,
    ListStoredConnectorsComponent,
    ConnectorStatusComponent,
    UpdateConnectorComponent]

})

  export class ConnectorModule {
  }

import {ConnectorComponent} from '@app/Connector/connector/connector.component';
import {SearchedConnectorComponent} from '@app/Connector/searched-connector/searched-connector.component';
import {SensorDataStreamingComponent} from '@app/Streaming/sensor-data-streaming/sensor-data-streaming.component';
import {ListStoredConnectorsComponent} from '@app/Connector/list-stored-connectors/list-stored-connectors.component';
import {ListRunningConnectorsComponent} from '@app/Connector/list-running-connectors/list-running-connectors.component';
import {ConnectorStatusComponent} from '@app/Connector/connector-status/connector-status.component';
import {UpdateConnectorComponent} from '@app/Connector/update-connector/update-connector.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


//
// {path: 'create', component: ConnectorComponent},
// {path: 'find/:name', component: SearchedConnectorComponent},
// {path: 'streaming', component: SensorDataStreamingComponent},
// {path: 'allStoredConnectors', component: ListStoredConnectorsComponent},
// {path: 'allRunningConnectors', component: ListRunningConnectorsComponent},
// {path: 'connectorStatus/:connectorName', component: ConnectorStatusComponent},
// {path: 'updateConnector/:connectorId', component: UpdateConnectorComponent},


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Connector'
    },
    children: [
      {
        path: '',
        redirectTo: 'connector'
      },
      {
        path: 'connector',
        component: ConnectorComponent,
        data: {
          title: 'Connector'
        }
      },
      {
        path: 'streaming',
        component: SensorDataStreamingComponent,
        data: {
          title: 'Streaming'
        }
      },
      {
        path: 'find/:name',
        component: SearchedConnectorComponent,
        data: {
          title: 'Find'
        }
      },
      {
        path: 'allStoredConnectors',
        component: ListStoredConnectorsComponent,
        data: {
          title: 'AllStored'
        }
      },
      {
        path: 'allRunningConnectors',
        component: ListRunningConnectorsComponent,
        data: {
          title: 'AllRunning'
        }
      },
      {
        path: 'connectorStatus/:connectorName',
        component: ConnectorStatusComponent,
        data: {
          title: 'Connector Status'
        }
      },
      {
        path: 'updateConnector/:connectorId',
        component: UpdateConnectorComponent,
        data: {
          title: 'Update Connector'
        }
      }

    ]
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class ConnectorRoutingModule {
}

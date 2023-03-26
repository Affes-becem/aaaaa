import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from './_helpers';


import {P500Component} from '@app/views/error/500.component';
import {P404Component} from '@app/views/error/404.component';
import {DefaultLayoutComponent} from '@app/containers';
import {LoginComponent} from '@app/account/login.component';
import {RegisterComponent} from '@app/account/register.component';
import {ConnectorComponent} from '@app/Connector/connector/connector.component';
import { ListRunningConnectorsComponent } from './Connector/list-running-connectors/list-running-connectors.component';
import { ListStoredConnectorsComponent } from './Connector/list-stored-connectors/list-stored-connectors.component';
import { ConnectorStatus } from './_models/connectorStatusModel';
import { UpdateConnectorComponent } from './Connector/update-connector/update-connector.component';


const accountModule = () => import('./account/account.module').then(x => x.AccountModule);


const routes: Routes = [
  {path: 'account', loadChildren: accountModule},


  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
    // canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'create',
    component: ConnectorComponent
  },
  {
    path: 'allRunningConnectors',
    component: ListRunningConnectorsComponent
  },
  {
    path: 'allStoredConnectors',
    component: ListStoredConnectorsComponent
  },
  {
    path: 'connectorStatus/:connectorName',
    component: ConnectorStatus
  },
  {
    path: 'updateConnector/:connectorId',
    component: UpdateConnectorComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    // canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [

      {
        path: 'connector',
        loadChildren: () => import('./Connector/connector.module').then(m => m.ConnectorModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/user.module').then(m => m.UserModule)
      },

      {
        path: 'sensors',
        loadChildren: () => import('./devices/sensor/sensor.module').then(m => m.SensorModule)
      },
      {
        path: 'nodes',
        loadChildren: () => import('./devices/node/node.module').then(m => m.NodeModule)
      },
      {
        path: 'gateways',
        loadChildren: () => import('./devices/gateway/gateway.module').then(m => m.GatewayModule)
      }
      ,
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'admin-dashboard',
        loadChildren: () => import('./views/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  {path: '**', component: P404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

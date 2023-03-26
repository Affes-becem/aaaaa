import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListNodeComponent} from '@app/devices/node/list-node/list-node.component';
import {CreateNodeComponent} from '@app/devices/node/create-node/create-node.component';
import {UpdateNodeComponent} from '@app/devices/node/update-node/update-node.component';
import {NodeDetailsComponent} from '@app/devices/node/node-details/node-details.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Nodes'
    },
    children: [
      {
        path: '',
        redirectTo: 'nodes'
      },
      {
        path: 'nodes',
        component: ListNodeComponent,
        data: {
          title: 'Nodes'
        }
      },
      {
        path: 'add',
        component: CreateNodeComponent,
        data: {
          title: 'Add'
        }
      },
      {
        path: 'update/:id',
        component: UpdateNodeComponent,
        data: {
          title: 'Update'
        }
      },
      {
        path: 'details/:id',
        component: NodeDetailsComponent,
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
export class NodeRoutingModule {
}



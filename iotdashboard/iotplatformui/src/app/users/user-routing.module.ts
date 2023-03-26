import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListUserComponent} from '@app/users/list-user/list-user.component';
import {CreateUserComponent} from '@app/users/create-user/create-user.component';
import {UpdateUserComponent} from '@app/users/update-user/update-user.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: '',
        redirectTo: 'users'
      },
      {
        path: 'users',
        component: ListUserComponent,
        data: {
          title: 'Users'
        }
      },
      {
        path: 'add',
        component: CreateUserComponent,
        data: {
          title: 'Add'
        }
      },
      {
        path: 'update/:id',
        component: UpdateUserComponent,
        data: {
          title: 'Update'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}



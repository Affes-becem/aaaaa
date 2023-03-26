import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from '@app/profile/user-profile/user-profile.component';
import {EditProfileComponent} from '@app/profile/edit-profile/edit-profile.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Profile'
    },
    children: [
      {
        path: '',
        redirectTo: 'profile'
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        data: {
          title: 'Profile'
        }
      },
      {
        path: 'edit',
        component: EditProfileComponent,
        data: {
          title: 'Edit'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}



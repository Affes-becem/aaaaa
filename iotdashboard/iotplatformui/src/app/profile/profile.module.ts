import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


import {UserProfileComponent} from '@app/profile/user-profile/user-profile.component';
import {EditProfileComponent} from '@app/profile/edit-profile/edit-profile.component';

import {ProfileRoutingModule} from '@app/profile/profile-routing.module';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    NgbModule
  ],
  declarations: [
    UserProfileComponent,
    EditProfileComponent
  ]

})

export class ProfileModule {

}

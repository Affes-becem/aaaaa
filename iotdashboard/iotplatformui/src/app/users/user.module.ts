import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


import {ListUserComponent} from '@app/users/list-user/list-user.component';
import {CreateUserComponent} from '@app/users/create-user/create-user.component';
import {UpdateUserComponent} from '@app/users/update-user/update-user.component';

import {UserRoutingModule} from '@app/users/user-routing.module';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    NgbModule
  ],
  declarations: [
    ListUserComponent,
    CreateUserComponent,
    UpdateUserComponent
  ]

})

export class UserModule {

}

import {Component, OnInit} from '@angular/core';
import {User, UserDetails} from '@app/_models';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService, UserService} from '@app/_services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {


  id: string;
  form: FormGroup;
  userValue: any;
  user: User;
  userDetails: UserDetails;
  role: string;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private accountService: AccountService
  ) {
  }

  ngOnInit(): void {

    this.userValue = this.accountService.userValue;
    this.id = this.userValue.user.id;
    this.role = this.userValue.user.roles[0].role;
    console.log(this.role);
    this.userService.getById(this.id).subscribe(data => {
        this.user = data;
        this.userDetails = this.user.userDetails;
        console.log(this.user);
      },
      error => {
        console.log(error);
      });

  }


  onSubmit() {

  }
}

import {Component, OnInit} from '@angular/core';
import {Sensor, User} from '@app/_models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService, AlertService, UserService} from '@app/_services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.less']
})
export class UpdateUserComponent implements OnInit {
  user: User;
  submitted = false;
  loading = false;
  form: FormGroup;
  id: string;
  hide = true;

  constructor(private accountService: AccountService,
              private alertService: AlertService,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.submitted = false;
    this.user = new User();
    this.id = this.route.snapshot.params.id;
    this.userService.getById(this.id).subscribe(data => {
        console.log(data);
        this.user = data;
      },
      error => console.log(error));
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],

    });

  }

  updateUser() {

    this.accountService.update(this.id, this.form.value).subscribe(data => {

        this.user = new User();

        this.gotoList();
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
        console.log(error);
      }
    )
    ;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    /* if (this.form.invalid) {
       return;
     }
 */
    this.loading = true;
    this.updateUser();
  }

  gotoList() {
    this.router.navigate(['/users']);
  }
}

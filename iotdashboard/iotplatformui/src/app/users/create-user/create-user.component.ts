import {Component, OnInit} from '@angular/core';
import {User} from '@app/_models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService, AlertService} from '@app/_services';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.less']
})
export class CreateUserComponent implements OnInit {
  user: User = new User();
  roles: string[] = ['USER', 'ADMIN', 'SUPER_ADMIN'];
  submitted = false;
  loading = false;
  form: FormGroup;


  constructor(private accountService: AccountService,
              private alertService: AlertService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      role: []
    });
  }

  save() {

    this.accountService.register(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', {keepAfterRouteChange: true});
          this.router.navigate(['/users'], {relativeTo: this.route});
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });

  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/users']);
  }


}

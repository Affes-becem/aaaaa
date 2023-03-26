import {Component, OnInit} from '@angular/core';
import {Gateway} from '@app/_models';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {DeviceService} from '@app/_services/device.service';
import {AlertService} from '@app/_services';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-create-gateway',
  templateUrl: './create-gateway.component.html',
  styleUrls: ['./create-gateway.component.less']
})
export class CreateGatewayComponent implements OnInit {

  gateway: Gateway = new Gateway();
  submitted = false;
  loading = false;
  form: FormGroup;
  nodes = null;

  constructor(private deviceService: DeviceService,
              private alertService: AlertService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    this.submitted = false;
    this.gateway = new Gateway();
    this.form = this.formBuilder.group({
      typeGateway: ['', Validators.required],
      ipAddress: ['', Validators.required],
      installDate: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  save() {

    this.deviceService
      .saveGateway(this.form.value).subscribe(data => {

        this.gateway = new Gateway();
        this.gotoList();
      },
      error => console.log(error));
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
    this.router.navigate(['/gateways']);
  }

}

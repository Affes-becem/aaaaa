import {Component, OnInit} from '@angular/core';
import {Sensor} from '@app/_models/sensor';
import {DeviceService} from '@app/_services/device.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AlertService} from '@app/_services';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-create-sensor',
  templateUrl: './create-sensor.component.html',
  styleUrls: ['./create-sensor.component.less']
})
export class CreateSensorComponent implements OnInit {

  sensor: Sensor = new Sensor();
  submitted = false;
  loading = false;
  form: FormGroup;
  nodes = null;

  constructor(private deviceService: DeviceService, private alertService: AlertService, private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.deviceService.getAllNodes()
      .pipe(first())
      .subscribe(nodes => this.nodes = nodes);
    this.submitted = false;
    this.sensor = new Sensor();
    this.form = this.formBuilder.group({
      idNode: ['', Validators.required],
      port: ['', Validators.required],
      typeSensor: ['', Validators.required],
      errorRate: ['', Validators.required],
      installDate: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  save() {

    this.deviceService
      .saveSensor(this.form.value).subscribe(data => {

        this.sensor = new Sensor();
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
    this.router.navigate(['/sensors']);
  }


}

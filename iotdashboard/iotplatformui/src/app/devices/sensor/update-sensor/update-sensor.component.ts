import {Component, OnInit} from '@angular/core';
import {Sensor, Node} from '@app/_models';
import {DeviceService} from '@app/_services/device.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-update-sensor',
  templateUrl: './update-sensor.component.html',
  styleUrls: ['./update-sensor.component.less']
})
export class UpdateSensorComponent implements OnInit {

  sensor: Sensor = new Sensor();
  submitted = false;
  loading = false;
  form: FormGroup;
  nodes = null;
  id: string;
  defaultStatus;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.sensor = new Sensor();

    this.id = this.route.snapshot.params['id'];

    this.deviceService.getAllNodes()
      .pipe(first())
      .subscribe(nodes => this.nodes = nodes);

    this.deviceService.getSensorById(this.id)
      .subscribe(data => {
        console.log(data);
        this.sensor = data;
        this.defaultStatus = this.sensor.status;
      });


    this.form = this.formBuilder.group({
      node: ['', Validators.required],
      macAddress: ['', Validators.required],
      typeSensor: ['', Validators.required],
      errorRate: ['', Validators.required],
      installDate: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  updateSensor() {
    console.log(this.id + this.sensor);
    this.deviceService.updateSensor(this.id, this.form.value)
      .subscribe(data => {

        this.sensor = new Sensor();
        this.goToList();
      });
  }

  onSubmit() {
    this.updateSensor();
  }

  goToList() {
    this.router.navigate(['/sensors']);
  }


}

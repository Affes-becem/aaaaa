import {Component, OnInit} from '@angular/core';
import {DeviceService} from '@app/_services/device.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-list-sensor',
  templateUrl: './list-sensor.component.html',
  styleUrls: ['./list-sensor.component.less']
})
export class ListSensorComponent implements OnInit {

  displayedColumns: string[] = ['port', 'typeSensor', 'errorRate', 'installDate', 'status', 'actions'];
  sensors = null;
  id: string;
  stateRoute: string;

  constructor(private deviceService: DeviceService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.route.params.subscribe(params => {
      this.stateRoute = params.state;
    });
    this.reloadData();
  }

  reloadData() {
    console.log(this.stateRoute);
    if (this.stateRoute == 'sensor') {
      this.deviceService.getSensorsByNode(this.id)
        .pipe(first())
        .subscribe(sensors => this.sensors = sensors);
      console.log('Sensors : ' + this.sensors);
    } else {
      this.deviceService.getAllSensors()
        .pipe(first())
        .subscribe(sensors => this.sensors = sensors);
      console.log('Sensors : ' + this.sensors);
    }
  }

  deleteSensor(id: string) {
    console.log(id);
    const sensor = this.sensors.find(x => x.id === id);
    console.log(sensor);
    this.deviceService.deleteSensor(id)
      .pipe(first())
      .subscribe(() => {
        this.sensors = this.sensors.filter(x => x.id !== id);
      });

  }

  sensorDetails(id: string) {
    this.router.navigate(['sensors/details', id]);
  }

}

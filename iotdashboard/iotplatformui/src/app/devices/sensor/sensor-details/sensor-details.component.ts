import { Component, OnInit } from '@angular/core';
import { Sensor } from '@app/_models/sensor';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from '@app/_services/device.service';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-sensor-details',
  templateUrl: './sensor-details.component.html',
  styleUrls: ['./sensor-details.component.less']
})
export class SensorDetailsComponent implements OnInit {





  id: string;
  sensor: Sensor;

  constructor(private route: ActivatedRoute, private router: Router,
    private deviceService: DeviceService) { }

  ngOnInit() {
    this.sensor = new Sensor();

    this.id = this.route.snapshot.params['id'];

    this.deviceService.getSensorById(this.id)
      .subscribe(data => {
        console.log(data)
        this.sensor = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['sensors']);
  }


}

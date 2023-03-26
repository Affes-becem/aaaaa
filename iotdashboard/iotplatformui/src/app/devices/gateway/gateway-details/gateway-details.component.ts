import {Component, OnInit} from '@angular/core';
import {Gateway} from '@app/_models';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceService} from '@app/_services/device.service';

@Component({
  selector: 'app-gateway-details',
  templateUrl: './gateway-details.component.html',
  styleUrls: ['./gateway-details.component.less']
})
export class GatewayDetailsComponent implements OnInit {


  id: string;
  gateway: Gateway;

  constructor(private route: ActivatedRoute, private router: Router,
              private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.gateway = new Gateway();

    this.id = this.route.snapshot.params['id'];

    this.deviceService.getGatewayById(this.id)
      .subscribe(data => {
        console.log(data);
        this.gateway = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['gateways']);
  }


}

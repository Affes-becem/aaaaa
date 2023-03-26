import {Component, OnInit} from '@angular/core';
import {DeviceService} from '@app/_services/device.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-list-gateway',
  templateUrl: './list-gateway.component.html',
  styleUrls: ['./list-gateway.component.less']
})
export class ListGatewayComponent implements OnInit {


  displayedColumns: string[] = ['typeGateway', 'ipAddress', 'status', 'actions'];
  gateways = null;

  constructor(private deviceService: DeviceService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.deviceService.getAllGateways()
      .subscribe(gateways => {
          this.gateways = gateways;
        },
        error => console.log(error));
  }

  deleteGateway(id) {
    console.log(id);
    const gateway = this.gateways.find(x => x.id === id);
    console.log(gateway);
    this.deviceService.deleteGateway(id)
      .pipe(first())
      .subscribe(() => {
        this.gateways = this.gateways.filter(x => x.id !== id);
      });

  }

  gatewayDetails(id: string) {
    this.router.navigate(['gateways/details', id]);
  }


}

import {Component, OnInit} from '@angular/core';
import {Node} from '@app/_models';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceService} from '@app/_services/device.service';

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.less']
})
export class NodeDetailsComponent implements OnInit {


  id: string;
  node: Node;

  constructor(private route: ActivatedRoute, private router: Router,
              private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.node = new Node();

    this.id = this.route.snapshot.params['id'];

    this.deviceService.getNodeById(this.id)
      .subscribe(data => {
        console.log(data);
        this.node = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['nodes']);
  }


}

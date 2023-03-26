import {Component, OnInit} from '@angular/core';
import {DeviceService} from '@app/_services/device.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-list-node',
  templateUrl: './list-node.component.html',
  styleUrls: ['./list-node.component.less']
})
export class ListNodeComponent implements OnInit {

  displayedColumns: string[] = ['nameNode', 'address', 'manufacturer', 'type', 'memoryCapacity', 'calculationCapacity', 'risidualEnergy', 'actions'];
  nodes = null;
  stateRoute: any;
  id;

  constructor(private deviceService: DeviceService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {


    this.route.params.subscribe(params => {
      if (params ) {
        this.id = params.id;

        this.stateRoute = params.state;
      }

    });

    this.reloadData();
  }

  reloadData() {
    console.log(this.stateRoute);
    if (this.stateRoute == 'node') {
      this.deviceService.getNodesByGateway(this.id)
        .pipe(first())
        .subscribe(nodes => this.nodes = nodes);
      console.log('Nodes : ' + this.nodes);
    } else {
      this.deviceService.getAllNodes()
        .pipe(first())
        .subscribe(nodes => this.nodes = nodes);
      console.log('Nodes : ' + this.nodes);
    }
  }


  deleteNode(id: string) {
    console.log(id);
    const node = this.nodes.find(x => x.id === id);
    console.log(node);
    this.deviceService.deleteNode(id)
      .pipe(first())
      .subscribe(() => {
        this.nodes = this.nodes.filter(x => x.id !== id);
      });

  }

  nodeDetails(id: string) {
    this.router.navigate(['nodes/details', id]);
  }


}

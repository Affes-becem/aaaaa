import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectorService } from '../../_services/ConnectorService';
import { ConnectorStatus, Task } from '../../_models/connectorStatusModel';

@Component({
  selector: 'app-connector-status',
  templateUrl: './connector-status.component.html',
  styleUrls: ['./connector-status.component.css']
})
export class ConnectorStatusComponent implements OnInit {

  connectorStatus: ConnectorStatus;
  connectorName: string;
  task: Task;
  message: any;

  constructor(private connectorService: ConnectorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.reloadData();

  }

  reloadData() {
    this.connectorName = this.route.snapshot.params['connectorName'];
    this.connectorService.getConnectorStatus(this.connectorName)
      .subscribe(response => {
        this.connectorStatus = response;
        console.log(this.connectorStatus);

      },
        error => console.log(error));
  }

}

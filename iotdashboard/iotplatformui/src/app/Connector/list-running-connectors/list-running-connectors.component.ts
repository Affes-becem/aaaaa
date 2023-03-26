import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {ConnectorService} from '../../_services/ConnectorService';

@Component({
  selector: 'app-list-running-connectors',
  templateUrl: './list-running-connectors.component.html',
  styleUrls: ['./list-running-connectors.component.css']
})
export class ListRunningConnectorsComponent implements OnInit {

  connectors: string[];
  connectorName: string;

  constructor(private connectorService: ConnectorService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.connectorService.findAllRunningConnecters()
      .subscribe(response => {
          this.connectors = response;
        },
        error => console.log(error));
  }

  deleteConnector(connectorName) {

    connectorName = this.connectors.find(x => x === connectorName);
    console.log(connectorName);
    this.connectorService.deleteRunningConnector(connectorName)
      .pipe(first())
      .subscribe(() => {
        this.connectors = this.connectors.filter(x => x !== connectorName);
      });

  }

}

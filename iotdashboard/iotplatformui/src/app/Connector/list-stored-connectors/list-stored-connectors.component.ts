import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {Config, Connector} from '../../_models/ConnectorModel';
import {ConnectorService} from '../../_services/ConnectorService';

@Component({
  selector: 'app-list-stored-connectors',
  templateUrl: './list-stored-connectors.component.html',
  styleUrls: ['./list-stored-connectors.component.css']
})
export class ListStoredConnectorsComponent implements OnInit {

  jsonOb = {
    'name': '',
    'config': {
      'connector.class': '',
      'tasks.max': '',
      'mqtt.server.uri': '',
      'mqtt.topics': '',
      'kafka.topic': '',
      'confluent.topic.bootstrap.servers': '',
      'confluent.topic.replication.factor': '',
      'confluent.license': ''
    }
  };

  public connector: Connector;
  public config: Config;
  public connectors: Connector[];
  public form: FormGroup;


  constructor(private connectorService: ConnectorService, private router: Router) {
  }

  ngOnInit(): void {
    this.connector = new Connector();
    this.config = new Config();
    this.connector.config = this.config;

    this.reloadData();

  }

  // find all stored connectors in the database
  reloadData() {

    this.connectorService.findAllStoredConnectors()
      .subscribe(response => {
          this.connectors = response;
        },
        error => console.log(error));
  }

  deleteConnector(connectorId) {
    const connector = this.connectors.find(x => x.connectorId === connectorId);
    //console.log(connector);
    console.log(connectorId);
    this.connectorService.deleteStoredConnector(connectorId)
      .pipe(first())
      .subscribe(() => {
        this.connectors = this.connectors.filter(x => x.connectorId !== connectorId);

      });

  }

  deployConnector(connector) {

    this.jsonOb.name = connector.name;
    this.jsonOb.config['connector.class'] = connector.config.connectorClass;
    this.jsonOb.config['tasks.max'] = connector.config.taskMax.toString();
    this.jsonOb.config['mqtt.server.uri'] = connector.config.mqttServerUri;
    this.jsonOb.config['mqtt.topics'] = connector.config.mqttTopics;
    this.jsonOb.config['kafka.topic'] = connector.config.kafkaTopic;
    this.jsonOb.config['confluent.topic.bootstrap.servers'] = connector.config.confluentTopicBootstrapServers;
    this.jsonOb.config['confluent.topic.replication.factor'] = connector.config.confluentTopicReplicationFactor.toString();
    this.jsonOb.config['confluent.license'] = connector.config.confluentLicense;
    this.connectorService.deployConnector(this.jsonOb);

  }

  goToList() {
    this.router.navigate(['/allStoredConnectors']);
  }

}

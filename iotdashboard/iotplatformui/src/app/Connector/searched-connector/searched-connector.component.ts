import {Component, OnInit} from '@angular/core';
import {ConnectorService} from '../../_services/ConnectorService';
import {FormGroup, FormBuilder, Validators, NgModel} from '@angular/forms';
import {Connector, Config} from '../../_models/ConnectorModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-searched-connector',
  templateUrl: './searched-connector.component.html',
  styleUrls: ['./searched-connector.component.css']
})
export class SearchedConnectorComponent implements OnInit {

  connector: Connector;
  config: Config;
  name: string;

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

  constructor(private route: ActivatedRoute, private connectorService: ConnectorService) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.connectorService.findConnector(this.name).subscribe(
      response => {
        console.log(response);
        this.connector = response;
      }
    );
  }

  deploy() {
    this.connector = new Connector();
    this.config = new Config();
    this.jsonOb.name = this.connector.name;
    this.jsonOb.config['connector.class'] = this.connector.config.connectorClass;
    this.jsonOb.config['tasks.max'] = this.connector.config.taskMax.toString();
    this.jsonOb.config['mqtt.server.uri'] = this.connector.config.mqttServerUri;
    this.jsonOb.config['mqtt.topics'] = this.connector.config.mqttTopics;
    this.jsonOb.config['kafka.topic'] = this.connector.config.kafkaTopic;
    this.jsonOb.config['confluent.topic.bootstrap.servers'] = this.connector.config.confluentTopicBootstrapServers;
    this.jsonOb.config['confluent.topic.replication.factor'] = this.connector.config.confluentTopicReplicationFactor.toString();
    this.jsonOb.config['confluent.license'] = this.connector.config.confluentLicense;
    this.connectorService.deployConnector(this.jsonOb);
    /*.subscribe( data => { console.log(data) } );*/

  }

}

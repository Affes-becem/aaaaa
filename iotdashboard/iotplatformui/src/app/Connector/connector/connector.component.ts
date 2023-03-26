import {Component, OnInit} from '@angular/core';
import {ConnectorService} from '../../_services/ConnectorService';
import {FormGroup, FormBuilder, Validators, NgModel} from '@angular/forms';
import {Connector, Config} from '../../_models/ConnectorModel';

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.css']
})

export class ConnectorComponent implements OnInit {

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
  title = 'Real-time-streaming';
  connector: Connector;
  config: Config;
  form: FormGroup;

  constructor(private connectorService: ConnectorService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.form = this.formBuilder.group({

      //connectorId: [''],
      name: [''],
      connectorClass: [''],
      taskMax: [''],
      mqttServerUri: [''],
      mqttTopics: [''],
      kafkaTopic: [''],
      confluentTopicBootstrapServers: [''],
      confluentTopicReplicationFactor: [''],
      confluentLicense: ['']

    });

  }

  onSubmit() {

    this.connector = new Connector();
    this.config = new Config();
    //this.connector.connectorId = this.form.value.connectorId;
    this.connector.name = this.form.value.name;
    this.config.confluentLicense = this.form.value.confluentLicense;
    this.config.confluentTopicBootstrapServers = this.form.value.confluentTopicBootstrapServers;
    this.config.confluentTopicReplicationFactor = this.form.value.confluentTopicReplicationFactor;
    this.config.connectorClass = this.form.value.connectorClass;
    this.config.kafkaTopic = this.form.value.kafkaTopic;
    this.config.mqttServerUri = this.form.value.mqttServerUri;
    this.config.mqttTopics = this.form.value.mqttTopics;
    this.config.taskMax = this.form.value.taskMax;
    this.connector.config = this.config;
    this.connectorService.saveConnector(this.connector);

  }

  deploy() {
    this.connector = new Connector();
    this.config = new Config();
    this.jsonOb.name = this.form.value.name;
    this.jsonOb.config['connector.class'] = this.form.value.connectorClass;
    this.jsonOb.config['tasks.max'] = this.form.value.taskMax;
    this.jsonOb.config['mqtt.server.uri'] = this.form.value.mqttServerUri;
    this.jsonOb.config['mqtt.topics'] = this.form.value.mqttTopics;
    this.jsonOb.config['kafka.topic'] = this.form.value.kafkaTopic;
    this.jsonOb.config['confluent.topic.bootstrap.servers'] = this.form.value.confluentTopicBootstrapServers;
    this.jsonOb.config['confluent.topic.replication.factor'] = this.form.value.confluentTopicReplicationFactor;
    this.jsonOb.config['confluent.license'] = this.form.value.confluentLicense;
    this.connectorService.deployConnector(this.jsonOb);

  }

}

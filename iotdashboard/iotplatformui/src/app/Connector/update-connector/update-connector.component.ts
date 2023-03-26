import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {Config, Connector} from '../../_models/ConnectorModel';
import {ConnectorService} from '../../_services/ConnectorService';

@Component({
  selector: 'app-update-connector',
  templateUrl: './update-connector.component.html',
  styleUrls: ['./update-connector.component.css']
})
export class UpdateConnectorComponent implements OnInit {

  connector: Connector;
  config: Config;
  form: FormGroup;
  connectorId: string;
  connectors: Connector[];
  defaultStatus;

  constructor(private connectorService: ConnectorService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

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


    this.connectorId = this.route.snapshot.params['connectorId'];

    this.connectorService.findAllStoredConnectors()
      .pipe(first())
      .subscribe(response => this.connectors = response);
    this.connectorService.findConnectorById(this.connectorId)
      .subscribe(data => {
        console.log(data);
        this.connector = data;
      });


  }

  updateConnector() {
    this.connector = new Connector();
    this.config = new Config();

    this.connector.name = this.form.value.name;
    this.config.confluentTopicBootstrapServers = this.form.value.confluentTopicBootstrapServers;
    this.config.confluentTopicReplicationFactor = this.form.value.confluentTopicReplicationFactor;
    this.config.connectorClass = this.form.value.connectorClass;
    this.config.kafkaTopic = this.form.value.kafkaTopic;
    this.config.mqttServerUri = this.form.value.mqttServerUri;
    this.config.mqttTopics = this.form.value.mqttTopics;
    this.config.taskMax = this.form.value.taskMax;
    this.config.confluentLicense = this.form.value.confluentLicense;

    this.connector.config = this.config;

    console.log(this.connector);
    this.connectorService.updateStoredConnector(this.connectorId, this.connector)
      .subscribe(data => {
        console.log(this.form.value);
        this.connector = new Connector();
        this.goToList();
      });
  }

  onSubmit() {
    this.updateConnector();
  }

  goToList() {
    this.router.navigate(['/allStoredConnectors']);
  }

}

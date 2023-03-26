import {Injectable} from '@angular/core';

export class Connector {
  // [x: string]: any;
  public connectorId: string;
  public name: string;
  public config: Config;

}

export class Config {

  public connectorClass: string;
  public taskMax: number;
  public mqttServerUri: string;
  public mqttTopics: string;
  public kafkaTopic: string;
  public confluentTopicBootstrapServers: string;
  public confluentTopicReplicationFactor: number;
  public confluentLicense: string;

}

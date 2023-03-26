
export class ConnectorStatus {

  public name: string;
  public connector: Connector;
  public tasks: Task[];

}

export class Connector {

  public state: string;
  public worker_id: string;

}

export class Task {

  public id: string;
  public state: string;
  public worker_id: string;

}

import { Injectable } from '@angular/core';
import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';
import { WebSocketService } from '../_services/websocket.service';
import { WebSocketOptions } from '../_models/websocket.options';
import { StompConfig} from '@stomp/stompjs/esm6';
import { environment } from 'src/environments/environment';


export const progressStompConfig: InjectableRxStompConfig = {
  webSocketFactory: () => {
    //return new WebSocket('ws://localhost:8080/websocket');
    return new WebSocket(`${environment.websocketUrl}`);

  }
};

@Injectable()
export class ProgressWebsocketService extends WebSocketService {
  constructor(stompService: RxStompService) {
    super(
      stompService,
      progressStompConfig,
      //new WebSocketOptions('sensors-temparature-data')
      new WebSocketOptions(`${environment.websocketTopic}`)

    );
  }
}

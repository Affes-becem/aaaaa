import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '@environments/environment';
import {User, Gateway} from '@app/_models';
import {Sensor} from '@app/_models';
import {Node} from '@app/_models';

@Injectable({providedIn: 'root'})
export class DeviceService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  observer = new Subject();

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;


  getAllSensors() {
    return this.http.get<Sensor[]>(`${environment.apiUrl}/device-management-microservice/services/sensors`);
  }

  getSensorById(id: string) {
    return this.http.get<Sensor>(`${environment.apiUrl}/device-management-microservice/services/sensors/${id}`);
  }

  saveSensor(params) {
    return this.http.post(`${environment.apiUrl}/device-management-microservice/services/sensors`, params);

  }

  updateSensor(id, params) {
    return this.http.put(`${environment.apiUrl}/device-management-microservice/services/sensors/${id}`, params);
  }

  deleteSensor(id: string) {
    return this.http.delete(`${environment.apiUrl}/device-management-microservice/services/sensors/${id}`)
      .pipe(map(x => {
        // auto logout if the logged in user deleted their own record

        return x;
      }));
  }


  getNodesByGateway(idGateway: string) {
    return this.http.get<Node[]>(`${environment.apiUrl}/device-management-microservice/services/gateways/${idGateway}/nodes`);
  }

  getSensorsByNode(idNode: string) {
    return this.http.get<Node[]>(`${environment.apiUrl}/device-management-microservice/services/nodes/${idNode}/sensors`);
  }

  getAllNodes() {
    return this.http.get<Node[]>(`${environment.apiUrl}/device-management-microservice/services/nodes`);
  }

  getNodeById(id: string) {
    return this.http.get<Node>(`${environment.apiUrl}/device-management-microservice/services/nodes/${id}`);
  }

  saveNode(params) {
    return this.http.post(`${environment.apiUrl}/device-management-microservice/services/nodes`, params);

  }

  updateNode(id: string, params) {
    return this.http.put(`${environment.apiUrl}/device-management-microservice/services/nodes/${id}`, params)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record

        return x;
      }));
  }

  deleteNode(id: string) {
    return this.http.delete(`${environment.apiUrl}/device-management-microservice/services/nodes/${id}`)
      .pipe(map(x => {
        // auto logout if the logged in user deleted their own record

        return x;
      }));
  }


  getAllGateways() {
    return this.http.get<Gateway[]>(`${environment.apiUrl}/device-management-microservice/services/gateways`);
  }

  getGatewayById(id: string) {
    return this.http.get<Gateway>(`${environment.apiUrl}/device-management-microservice/services/gateways/${id}`);
  }

  saveGateway(params) {
    return this.http.post(`${environment.apiUrl}/device-management-microservice/services/gateways`, params);

  }

  updateGateway(id: string, params) {
    return this.http.put(`${environment.apiUrl}/device-management-microservice/services/gateways/${id}`, params);

  }

  deleteGateway(id: string) {
    return this.http.delete(`${environment.apiUrl}/device-management-microservice/services/gateways/${id}`);

  }
}

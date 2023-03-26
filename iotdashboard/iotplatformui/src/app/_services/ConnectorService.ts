import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Connector} from '../_models/ConnectorModel';
import {catchError, retry} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {ConnectorStatus} from '../_models/connectorStatusModel';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class ConnectorService {

  connector: Connector;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  saveConnector(params) {
    return this.http.post<Connector>(`${environment.springUrl}/create`, params)
      .subscribe(res => console.log(res), err => console.log(err));

  }

  deployConnector(params) {
    return this.http.post<Connector>(`${environment.kafkaUrl}/connectors`, params)
      .subscribe(res => console.log(res), err => console.log(err));

  }

  findConnector(name: string): Observable<Connector> {
    const url = `${environment.springUrl}/find/${name}`;
    return this.http.get<Connector>(url).pipe(
      //tap(_ => console.log(`fetched name=${name}`)),
      catchError(this.handleError<Connector>(`findConnector name=${name}`))
    );
  }

  findConnectorById(connectorId: string): Observable<Connector> {
    const url = `${environment.springUrl}/findConnector/${connectorId}`;
    return this.http.get<Connector>(url);

  }

  findAllStoredConnectors() {
    return this.http.get<Connector[]>(`${environment.springUrl}/find`);
    //.subscribe(res => console.log(res), err => console.log(err));
  }

  findAllRunningConnecters() {
    return this.http.get<string[]>(`${environment.kafkaUrl}/connectors`);
    //.subscribe(res => console.log(res), err => console.log(err));
  }

  getConnectorStatus(name: string) {
    return this.http.get<ConnectorStatus>(`${environment.kafkaUrl}/connectors/${name}/status`);
  }

  deleteStoredConnector(connectorId: string) {
    return this.http.delete<string>(`${environment.springUrl}/deleteConnector/${connectorId}`);
  }

  deleteRunningConnector(name: string) {
    return this.http.delete<string>(`${environment.kafkaUrl}/connectors/${name}`);
  }

  updateStoredConnector(connectorId: string, params) {

    return this.http.put<Connector>(`${environment.springUrl}/editConnector/${connectorId}`, params);

  }

  /**
   *
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   *
   */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

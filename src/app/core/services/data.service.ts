import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from';

import { environment } from '../../../environments/environment.prod';
import { Claim } from '../store/claim/claim.model';
import { ClaimRebuttal } from '../store/claim-rebuttal/claim-rebuttal.model';
import { Contact } from '../store/contact/contact.model';
import { Crisis } from '../store/crisis/crisis.model';
import { Hero } from '../store/hero/hero.model';
import { Note } from '../store/note/note.model';
import { Rebuttal } from '../store/rebuttal/rebuttal.model';

const BASE_URL = '/api';

@Injectable()
export class DataService {
  private JSON_HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

  constructor(private http: Http) { }

  login(payload) {
    return this.http.post(`${BASE_URL}/auth/login`, payload, this.JSON_HEADER)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getClaims(): Observable<Claim[]> {
    return this.http.get(`${BASE_URL}/claims`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getRebuttals(): Observable<Rebuttal[]> {
    return this.http.get(`${BASE_URL}/rebuttals`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getClaimRebuttals(): Observable<ClaimRebuttal[]> {
    return this.http.get(`${BASE_URL}/claim-rebuttals`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getNotes(): Observable<any> {
    return this.http.get(`${BASE_URL}/notes`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addOrUpdateNote(note: Note): Observable<Note> {
    return this.http.post(`${BASE_URL}/note`, this.prepareRecord(note), this.JSON_HEADER)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getContacts(): Observable<any> {
    return this.http.get(`${BASE_URL}/contacts`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addOrUpdateContact(contact: Contact): Observable<Contact> {
    return this.http.post(`${BASE_URL}/contact`, this.prepareRecord(contact), this.JSON_HEADER)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCrises(): Observable<any> {
    return this.http.get(`${BASE_URL}/crises`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addOrUpdateCrisis(crisis: Crisis): Observable<Crisis> {
    return this.http.post(`${BASE_URL}/crisis`, this.prepareRecord(crisis), this.JSON_HEADER)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(`${BASE_URL}/heroes`)
      .map(this.extractData)
      // .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError);
  }

  getHero(id: number | string): Observable<Hero> {
    return this.http
      .get('app/heroes/?id=${id}')
      .map((r: Response) => r.json().data as Hero);
  }

  addOrUpdateHero(hero: Hero): Observable<Hero> {
    return this.http.post(`${BASE_URL}/hero`, this.prepareRecord(hero), this.JSON_HEADER)
      .map(this.extractData)
      .catch(this.handleError);
  }

  prepareRecord(record) {
    delete record.dirty;
    return JSON.stringify(record);
  }

  private extractData(res: Response) {
    // if (res.status < 200 || res.status >= 300) {
    //   throw new Error('Bad response status: ' + res.status);
    // }
    // let body = res.json();
    // return body.data || {};

    let body = res.json();
    return body || {};

  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

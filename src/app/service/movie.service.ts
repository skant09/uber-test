import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Hero } from './mock-heroes';
declare var jQuery: any;

@Injectable()
export class MovieService {
  private movieUrl = 'https://data.sfgov.org/OData.svc/yitu-d5am';

  constructor(private http: Http) {
  }

  public getHeroes(): Observable<Hero[]> {
    return this.http.get(this.movieUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const parser = new DOMParser();
    const body = parser.parseFromString(res.text(), 'application/xml');
    const entries = body.getElementsByTagName('entry');
    return entries;
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

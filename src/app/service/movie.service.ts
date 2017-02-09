import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Movie } from './mock-heroes';
declare var jQuery: any;

@Injectable()
export class MovieService {
  private movieUrl = 'https://data.sfgov.org/OData.svc/yitu-d5am';

  constructor(private http: Http) {
  }

  public getMovies(): Observable<Movie[]> {
    return this.http.get(this.movieUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const parser = new DOMParser();
    const body = parser.parseFromString(res.text(), 'application/xml');
    const entries = body.querySelectorAll('entry properties');
    const movies = [];
    for (let i = 0; i < entries.length; i++) {
      const movie = entries[i].getElementsByTagName('title')[0].innerHTML;
      const author = entries[i].getElementsByTagName('writer')[0].innerHTML;
      let location = entries[i].getElementsByTagName('locations')[0].innerHTML;
      location = location ? location : 'NA';
      const length = Math.max(movies.length - 1, 0);
      if (movies[length] && movie === movies[length].name) {
        movies[length]['location'].push(location);
      } else {
        movies.push(new Movie(i, movie, [location], author, 37.7749, -122.4195));
      }
    }
    return movies;
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

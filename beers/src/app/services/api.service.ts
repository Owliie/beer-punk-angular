import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Beer} from '../beer';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private path = 'https://api.punkapi.com/v2/beers/';

  getBeers(): Observable<HttpResponse<Beer[]>> {
    return this.http.get<Beer[]>(this.path, {observe: 'response'});
  }

  getBeerByName(name: string): Observable<HttpResponse<Beer[]>> {
    return this.http.get<Beer[]>(this.path + '?beer_name=' + name, {observe: 'response'});
  }

  getBeerById(id: number): Observable<HttpResponse<Beer[]>> {
    return this.http.get<Beer[]>(this.path + '?ids=' + id, {observe: 'response'});
  }
}

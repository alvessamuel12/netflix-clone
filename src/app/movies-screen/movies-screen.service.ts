import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesScreenService{

  constructor(private http:HttpClient) { }

  urlSeries = `https://private-3923c4-santandercoders809.apiary-mock.com/series/`
  getDataSeries(seriesArray:Number[]) {
    return seriesArray.map(seriesId => {
      return this.http.get(this.urlSeries + seriesId)
    })
  }

}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

import { catchError } from 'rxjs/operators';
// import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any): any {
    return throwError(error.error);
  }

  get(
    path: string,
    limit: number = 0,
    offset: number = 0,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    console.log('TYPE : ', params.get('acc_type'));
    if (limit > 0) {
      params = params.append('limit', limit.toString());
    }
    if (offset > 0) {
      params = params.append('offset', offset.toString());
    }

    return this.http
      .get(`${environment.apiUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: object = {}): Observable<any> {
    return this.http
      .put(`${environment.apiUrl}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: object = {}): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}${path}`, body)
      .pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http
      .delete(`${environment.apiUrl}${path}`)
      .pipe(catchError(this.formatErrors));
  }
}

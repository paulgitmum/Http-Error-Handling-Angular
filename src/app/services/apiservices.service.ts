import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiservicesService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http
      .get<any>(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(error.message || 'Server Error');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = '/assets/data/employees.json';

  constructor(private http : HttpClient) { }

  getEmployees() : Observable<IEmployee []>{
    return this.http.get<IEmployee []>(this.url).pipe(
      retry(1),
      catchError(error => {
        return throwError(error.message || 'Server Error');
    })
    )
  }
}

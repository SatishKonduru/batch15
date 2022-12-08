import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { courseInterface } from '../course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
private _dataURL = '../../assets/sharedData/course.json'
  constructor(private _http: HttpClient) { }

  getCourseDetails(): Observable<courseInterface[]>{
  return  this._http.get<courseInterface[]>(this._dataURL)
  .pipe(catchError(this.incomingError))
  }

  incomingError(err: HttpErrorResponse ){
     return throwError(err.message || "Unkown Server Error")
  
  }
}

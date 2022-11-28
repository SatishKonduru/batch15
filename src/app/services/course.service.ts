import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { courseInterface } from '../course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
private _dataURL = '../../assets/sharedData/course.json'
  constructor(private _http: HttpClient) { }

  getCourseDetails(): Observable<courseInterface[]>{
  return  this._http.get<courseInterface[]>(this._dataURL)
  }
}

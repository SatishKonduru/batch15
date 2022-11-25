import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourseDetails(){
    return [
              {id: 1, name: "Angular", fee: 1000},
              {id: 2, name: "React", fee: 2000},
              {id: 3, name: "Angular Material", fee: 3000}
          ]
  }
}

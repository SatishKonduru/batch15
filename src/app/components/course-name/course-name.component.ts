import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-name',
  templateUrl: './course-name.component.html',
  styleUrls: ['./course-name.component.css']
})
export class CourseNameComponent implements OnInit {
public course = []

  constructor(private _courseService: CourseService) { }

  ngOnInit() {

  //this.course =  this._courseService.getCourseDetails()
  this._courseService.getCourseDetails()
  .subscribe(res => {
    this.course = res
  })

  }

}

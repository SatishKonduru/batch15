import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  public course = []
  constructor(private _courseService : CourseService) { }

  ngOnInit() {
   this.course= this._courseService.getCourseDetails()
  }

}

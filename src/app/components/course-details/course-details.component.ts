import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  public course = [
    {id: 1, name: "Angular", fee: 1000},
    {id: 2, name: "React", fee: 2000},
    {id: 3, name: "Angular Material", fee: 3000}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

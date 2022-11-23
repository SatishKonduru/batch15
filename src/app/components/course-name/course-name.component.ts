import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-name',
  templateUrl: './course-name.component.html',
  styleUrls: ['./course-name.component.css']
})
export class CourseNameComponent implements OnInit {
public course = [
  {id: 1, name: "Angular", fee: 1000},
  {id: 2, name: "React", fee: 2000},
  {id: 3, name: "Angular Material", fee: 3000}
]
  constructor() { }

  ngOnInit(): void {
  }

}

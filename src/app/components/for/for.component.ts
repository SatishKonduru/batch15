import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  public names = ["Satish", "Thirumalesh", "Sunil", "RSK"]
  public myNames = [
    {
    id: 1,
    name: "Renu",
    age: 16
  },
  {
    id: 2,
    name: "Preethi",
    age: 15
  },
  {
    id: 3,
    name: "Lavanya",
    age: 13
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}

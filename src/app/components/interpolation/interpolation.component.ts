import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }
  public name = "Satish"
  public myLocation = window.location.href
  ngOnInit(): void {
  }

  myName(){
    return `Hi Welcome Mr. ${this.name}`
  }

}

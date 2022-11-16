import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-binding',
  templateUrl: './c-binding.component.html',
  styleUrls: ['./c-binding.component.css']
})
export class CBindingComponent implements OnInit {

  public myTextColor = "textColor"
  myTextSize = "textSize"
  isRequired = true
  public myGroup = {
    "textColor": this.isRequired,
    "textSize": this.isRequired,
    "textStyle" : !this.isRequired
  }
  constructor() { }

  ngOnInit(): void {
  }

}

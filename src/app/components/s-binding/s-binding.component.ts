import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-binding',
  templateUrl: './s-binding.component.html',
  styleUrls: ['./s-binding.component.css']
})
export class SBindingComponent implements OnInit {
  public orange = "red"
  public required = false
  public myStyleGroup = {
    color: 'red',
    fontStyle: 'italic',
    fontSize: '100px'
  }
  constructor() { }

  ngOnInit(): void {
  }

}

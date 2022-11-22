import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {

  public name="Satish Konduru"
  constructor() { }
  public person = {
    'firstName': 'Satish',
    'lastName': 'Konduru'
  }
  public date = new Date()
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  templateUrl: './e-binding.component.html',
  styleUrls: ['./e-binding.component.css']
})
export class EBindingComponent implements OnInit {

  public myMsg = ''
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.myMsg = "You Clicked this Button!"
    console.log("You Clicked this Button!")
  }
  showMessage(msg){
    this.myMsg = msg
  }

}

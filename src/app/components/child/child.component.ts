import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input()  public fromParent
@Output() public childMsg = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.childMsg.emit("This is CHILD MESSAGE")
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  isChild = true;
  firstName = "";

  constructor() {
    console.log("Parent Constructor called");
  }

  ngOnInit(): void {
    console.log("Parent OnInit - component is initialized");
  }
  toggleChild() {
    this.isChild = !this.isChild;
  }
  
  // ngOnChanges() {
  //   console.log("Parent Onchanges");
  // }

  // ngDoCheck() {
  //   console.log("Parent DoCheck");
  // }



}

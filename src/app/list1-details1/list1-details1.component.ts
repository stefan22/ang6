import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list1-details1',
  templateUrl: './list1-details1.component.html',
  styleUrls: ['./list1-details1.component.css'],
  inputs: ['details']
})
export class List1Details1Component implements OnInit {

  highlight: boolean;

  constructor() { }

  ngOnInit() {
  }


  onTitleClick(e, p) {
    console.log(e);
    console.log(p);
    p.highlight = !p.highlight;


  }// onTitleClick

}

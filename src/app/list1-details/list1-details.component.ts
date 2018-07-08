import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list1-details',
  templateUrl: './list1-details.component.html',
  styleUrls: ['./list1-details.component.css'],
  inputs: ['details']
})
export class List1DetailsComponent implements OnInit {
  highlight: boolean;
  
  constructor() { }

  ngOnInit() {
  }


  onTitleClick(e, p) {
    console.log(e);
    console.log(p);
    p.highlight = !p.highlight;


  }// onTitleClick



}// ListDetailsComponent class

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  color: string = '#9d9d9d';
  constructor() {}

  ngOnInit() {}

  onClickChange(e) {
    var tar = e.target.textContent.trim();
    if (tar == 'Ng6') {
      if (this.color == '#9d9d9d') {
        this.color = 'red';
      } else {
        this.color = '#9d9d9d';
      }
    }
  }
} // NavComponent class

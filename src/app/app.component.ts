import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heading = 'App';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['']);
  }



} // AppComponent class

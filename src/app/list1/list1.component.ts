import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})

export class List1Component implements OnInit {
 
  query1: string;
  url: string;
  posts: object;
  

  constructor(private http: HttpClient) { 
    this.query1 = '';
    this.posts = [];


  }// constructor

  ngOnInit() :void {
    this.url = '../assets/data.json';
    this.http.get<Object>(this.url).subscribe(
      data => {
        this.posts = data;
        console.log(data);
      }
    );

  }// ngOnInit

  

  



  
  

  



}// List1Component class

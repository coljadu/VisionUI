import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {  NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = "";
  plans = [];
  constructor(private http: HttpClient, private router: Router) { 
  
  }

  ngOnInit() {
    //this.getUserInfo();
    //this.getPlanInfo();
  }

    
  getUserInfo() {
    this.name = 'Ram';
  }
  getPlanInfo(){
    this.http.get('http://localhost:8080/vsign-api/product/plans?status=ACTIVE')
      .subscribe(res => {
        //console.log(res.data);
        //this.plans = res.data;

      })
  }
}

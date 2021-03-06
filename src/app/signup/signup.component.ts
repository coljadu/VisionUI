import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {};
  stateList = [];
  cityList = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getStatesList();
  }
  registerUser() {
    console.log(this.user);
    // this.http.post('localhost:8080/vsign-api/signup/register', this.user)
    //   .subscribe(res => {
    //     console.log('signup');
    //       this.router.navigate(['/home']);
    //     }, (err) => {
    //       console.log(err);
    //     }
    //   );
    this.router.navigate(['/home']);
  }
  getStatesList() {
    // this.http.get('http://localhost:8080/vsign-api/location/country/1/states')
    //   .subscribe(res => {
    //     console.log(res);
    //     this.stateList = res;
    //     }, (err) => {
    //       console.log(err);
    //     }
    //   );
    this.stateList = [
      {id : 1, name : "madhya pradesh"},
      {id : 2, name : "maharastra"},
      {id : 3, name : "utter pradesh"}
    ];
  }
  public getCityList(StateId) {
    // this.http.get('http://localhost:8080/vsign-api/location/states/'+StateId+'/cities')
    //   .subscribe(res => {
    //     console.log(res);
    //     }, (err) => {
    //       console.log(err);
    //     }
    //   );
    console.log(StateId);
    if(StateId==='1') this.cityList = [{id : 1, name :"bhopal"},{id : 2, name :"Indore"}]
    else if(StateId===2) this.cityList = [{id : 1, name :"Mumbai"},{id : 2, name :"Pune"}]
    else if(StateId===3) this.cityList = [{id : 1, name :"Lakhnao"},{id : 2, name :"Kanpur"}]
    
  }  

}

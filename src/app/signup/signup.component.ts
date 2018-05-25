import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {};
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
    this.http.get('http://localhost:8080/vsign-api/location/country/1/states')
      .subscribe(res => {
        console.log(res);
        }, (err) => {
          console.log(err);
        }
      );
  }
  getCityList(StateId) {
    this.http.get('http://localhost:8080/vsign-api/location/states/'+StateId+'/cities')
      .subscribe(res => {
        console.log(res);
        }, (err) => {
          console.log(err);
        }
      );
  }  

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  loginUser() {
    console.log(this.user);
    // this.http.post('localhost:8080/Vsign.com-api/app/login', this.user)
    //   .subscribe(res => {
    //     console.log('login');
    //       this.router.navigate(['/home']);
    //     }, (err) => {
    //       console.log(err);
    //     }
    //   );
  }
}

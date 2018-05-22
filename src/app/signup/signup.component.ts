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
  }
  registerUser() {
    // this.http.post('/user/signup', this.user)
    //   .subscribe(res => {
    //     console.log('signup');
    //       this.router.navigate(['/home']);
    //     }, (err) => {
    //       console.log(err);
    //     }
    //   );
    this.router.navigate(['/home']);
  }

}

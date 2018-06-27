import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //cartDetails = [];
  cartDetails = [{
    'description' : "product 1",
    'price' : 2000,
    'quntity' : 1,
    'duration' : 12

  }]

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    //this.getCartInfo();
  }

  getCartInfo() {
    this.http.get(environment.api_url+'cartUrl')
    .subscribe(res => {
      this.cartDetails = res;
    },
    (err) => {
      console.log(err);
    })
  }
  editCartInfo() {

  }
}

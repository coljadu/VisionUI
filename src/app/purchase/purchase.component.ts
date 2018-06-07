import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  
  purchaseData = {};
  Plans:any = [];
  constructor(private http: HttpClient, private router: Router) {
    
   }

  ngOnInit() {
    this.getPlans();
  }

  getPlans() {
    this.http.get('https://stupid-stingray-78.localtunnel.me/vsign-api/product/plans?status=ACTIVE')
      .subscribe(res => {
        console.log(res);
        this.Plans = res;
      })
  }  
}

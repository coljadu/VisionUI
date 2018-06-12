import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  
  purchaseData = {};
  Plans:any = [];
  selectedPlan = {};
  machineId = "";

  constructor(private http: HttpClient, private router: Router) {
    
   }

  ngOnInit() {
    this.getPlans();
  }

  getPlans() {
    this.http.get(environment.api_url+'/product/plans?status=ACTIVE')
      .subscribe(res => {
        console.log(res);
        this.Plans = res;
      })
  } 
  intitPurchase(){
    var puchasedData = {};
    puchasedData.machineId = this.machineId;
    puchasedData.planId = this.selectedPlan.planId;
    console.log('purachses data',puchasedData);

    this.http.post(environment.api_url+'/customers/initiateOrder',puchasedData)
      .subscribe(res => {
        console.log(res);
      })
  } 
}

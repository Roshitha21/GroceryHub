import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-viewallreview',
  templateUrl: './viewallreview.component.html',
  styleUrls: ['./viewallreview.component.css']
})
export class ViewallreviewComponent implements OnInit {
  review:any;
  constructor(private service:ProjService,private router: Router, private local:LocalStorageService,) { }

  ngOnInit(): void {
    this.service.viewAllReviews().subscribe((result: any)=>{console.log(result); this.review=result;});
  }
  deliverOrder(orderId: any) {
    this.service.deliverOrder(orderId).subscribe((result: any)=>{console.log(result);});
  }
  callLogOut() {
    this.local.logout();
    this.router.navigate(['login']);
  }
  routeTosellProduct() {
    this.local.logout();
    this.router.navigate(['sell-product']);
  }
  routeToViewCustomers() {
    this.router.navigate(['show-customers']);
  }
  routeToViewAllOrders() {
    this.router.navigate(['view-all-orders']);
  }
  
  callHome() {
    this.router.navigate(['homepage']);
  }
  routeToViewAllReviews() {
    this.router.navigate(['viewallreview']);
  }
}


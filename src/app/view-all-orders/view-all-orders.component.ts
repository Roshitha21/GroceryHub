import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
@Component({
  selector: 'app-view-all-orders',
  templateUrl: './view-all-orders.component.html',
  styleUrls: ['./view-all-orders.component.css']
})
export class ViewAllOrdersComponent implements OnInit {
  orders:any;
  constructor(private service:ProjService,private router: Router, private local:LocalStorageService,) { }

  ngOnInit(): void {
    this.service.viewAllOrders().subscribe((result: any)=>{console.log(result); this.orders=result;});
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
  routeToViewAllReviews() {
    this.router.navigate(['viewallreview']);
  }
  callHome() {
    this.router.navigate(['homepage']);
  }
}

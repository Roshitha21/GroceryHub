import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {
  customers:any;
  constructor(private service: ProjService,private router: Router, private local:LocalStorageService) { }

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe((result: any) => {console.log(result); this.customers = result});
    console.log(JSON.parse(this.customers));
  }
  callLogOut() {
    this.local.logout();
    this.router.navigate(['login']);
  }
  routeToViewAllReviews() {
    this.router.navigate(['viewallreview']);
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
}



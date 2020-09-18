import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { ProjService } from '../proj.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  newProducts:any;
  productName:any;
  searchedProduct:any;
  constructor(private router: Router, private local:LocalStorageService, private service:ProjService) { }

  ngOnInit(): void {
    this.service.getNewProducts().subscribe((result:any)=>{console.log(result); this.newProducts = result;} )
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
  routeToViewAllReviews() {
    this.router.navigate(['viewallreview']);
  }
  routeToViewAllOrders() {
    this.router.navigate(['view-all-orders']);
  }
  searchProduct(productName: any) {
    this.productName = productName;
    this.service.searchProduct(productName).subscribe((result:any)=>{console.log(result); this.searchedProduct = result; console.log(this.searchedProduct);});
  }
  callHome() {
    this.router.navigate(['homepage']);
  }
}

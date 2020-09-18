import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import { LocalStorageService } from '../local-storage.service';

import { Router } from '@angular/router';
declare var jQuery:any;

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
  customer:any;
  myProducts:any;
  editObject:any;
  constructor(private service: ProjService, private local: LocalStorageService,private router: Router) { }

  ngOnInit(): void {
    this.customer = JSON.parse(this.local.getLocal());
    //console.log(this.customer.custId);
    this.service.viewMyProductsAdded(this.customer.custId).subscribe((result:any)=> {console.log(result); this.myProducts = result;});
  }
  deleteMyProduct(product: any) {
    this.service.deleteMyProduct(product).subscribe((result: any) => {
      const i = this.myProducts.findIndex((element) => {return element.productId === product.productId;
          });
      this.myProducts.splice(i , 1);
        });
  }
  showEditPopup(){
    this.editObject = this.customer;
    console.log(this.editObject);
    jQuery('#custModel').modal('show');
  }
  updateCust() {
    this.service.updateCust(this.editObject).subscribe();
    console.log(this.editObject)
  }
  callLogOut() {
    this.router.navigate(['login']);
  }
  routeTosellProduct() {
    this.router.navigate(['social']);
  }
  routeToViewMyCart() {
    this.router.navigate(['cart']);
  }
  routeToProductsAddedByMe() {
    this.router.navigate(['my-products']);
  }
  routeToMyOrders() {
    this.router.navigate(['order-history']);
  }
  callHome() {
    this.router.navigate(['homepage']);
  }
}

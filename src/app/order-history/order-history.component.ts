import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { ProjService } from '../proj.service';
import { Router } from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  customer: any;
  orders: any;
  order: any;
products:any;
  orderCount:any;
  editObject:any
  address:any
  productName: any;
  searchedProduct: any;
  oldProducts: any;
  newProducts: any;
  constructor(private local: LocalStorageService, private service: ProjService,private router: Router) { }

  ngOnInit(): void {
    this.customer = JSON.parse(this.local.getLocal());
    console.log(this.customer.custId);
    this.service.viewMyOrders(this.customer.custId).subscribe((result: any) => {
      this.orders = result;
    });
    this.service.viewCountOfOrders(this.customer.custId).subscribe((result: any) => {console.log(result); this.orderCount = result; console.log(this.orderCount[0][0])});
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

handleAddToCart(product: any) {
  const i = this.products.findIndex((element)=>{return element.productId === product.productId;});
//  this.service.addToCart(this.customer.custId,this.products[i].productId).subscribe((result:any)=>console.log(result));
} 


handleAddToCart1(product: any, quantity: any) {
  const i = this.oldProducts.findIndex((element)=>{return element.productId === product.productId;});
  this.service.addToCart(this.customer.custId,this.oldProducts[i].productId, quantity).subscribe((result:any)=>console.log(result));
}

handleAddToCart2(product: any, quantity: any) {
  const i = this.newProducts.findIndex((element)=>{return element.productId === product.productId;});
  this.service.addToCart(this.customer.custId,this.newProducts[i].productId, quantity).subscribe((result:any)=>console.log(result));
}

searchProduct(productName: any) {
  this.productName = productName;
  this.service.searchProduct(productName).subscribe((result:any)=>{console.log(result); this.searchedProduct = result; console.log(this.searchedProduct);});
}

callHome() {
  this.router.navigate(['homepage']);
}







}



    /* this.local.setLocalOrders(JSON.stringify(result));
       this.orders = JSON.parse(this.local.getLocalOrders());
    
    for (let order of this.orders) {
       if (!(order.orderId in this.orderIds)) {
         this.orderIds.push.apply(order.orderId);
       }
     }*/




import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import { LocalStorageService } from '../local-storage.service';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
declare var jQuery:any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cartTotal = 0;
  review:any;
  constructor(private service: ProjService, private local: LocalStorageService, private toastr : ToastrService,private router: Router) {
    this.address={state:'', street:'', city:'', houseNo:'', pincode:''}
    this.review = {reviewId: '', review: ''}

   }
  customer: any;
  cartItems: any;
  books: any
  editObject:any
  address:any
  bookName: any;
  searchedBook: any;
  oldBooks: any;
  newBooks: any;

  ngOnInit(): void {
    this.customer = JSON.parse(this.local.getLocal());
    this.service.viewMyCart(this.customer.custId).subscribe((result: any) => {
      this.cartItems = result; console.log(this.cartItems);

      this.cartItems.forEach(element => {
        console.log("qty1" + element.cartQuantity);
        console.log(element.price);
        this.cartTotal += (element.price)
      });

      console.log("cartTotal" + this.cartTotal);


    });

  }
  register(registerForm: any): void {
    this.service.Review(this.review).subscribe((result: any) => { console.log(result); } );
    console.log(this.review);
    this.router.navigate(['review']);
  }
  placeOrder(custId: any) {
    this.service.placeOrder(custId).subscribe((result: any) => { console.log(result) });
    this.toastr.success('Order Placed Successfully !', 'Order');
          
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
  routeTosellBook() {
    this.router.navigate(['social']);
  }
  routeToViewMyCart() {
    this.router.navigate(['cart']);
  }
  routeToBooksAddedByMe() {
    this.router.navigate(['my-products']);
  }
  routeToMyOrders() {
    this.router.navigate(['order-history']);
  }
  callHome() {
    this.router.navigate(['homepage']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import { LocalStorageService } from '../local-storage.service';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
declare var jQuery:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartTotal = 0;
  constructor(private service: ProjService, private local: LocalStorageService, private toastr : ToastrService,private router: Router) { }
  customer: any;
  cartItems: any;
  products: any
  editObject:any
  address:any
  productName: any;
  searchedProduct: any;
  oldProducts: any;
  newProducts: any;
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
  placeOrder(custId: any) {
    this.service.placeOrder(custId).subscribe((result: any) => { console.log(result) });
    this.toastr.success('Order Placed Successfully', 'Place Order');
          
  }

  removeFromCart(cartItem: any) {
    console.log("i"+cartItem.cartId)
    this.service.removeFromCart(cartItem.cartId).subscribe((result: any) => {
      const i = this.cartItems.findIndex((element) => {
        return element.productName === cartItem.productName;
      });
      console.log("i" + i);
      this.cartItems.splice(i, 1);
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


/*
this.cartItems.forEach(element => {
      console.log("qty1"+ element.quantity);
      console.log(element.price);
      this.cartTotal += (element.quantity * element.price)
    });
    update(quantity: any, productId: any) {
    this.service.updateCartQuantity(productId, quantity, this.customer.custId).subscribe((result: any) => { console.log("qty " + result); });
  }
    
    */
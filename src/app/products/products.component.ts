import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import { LoginComponent } from '../login/login.component';
import { LocalStorageService } from '../local-storage.service';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Router } from '@angular/router';
import { MessengerService } from '../messenger.service';
import { ThrowStmt } from '@angular/compiler';
declare var jQuery:any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any
  editObject:any
  customer:any
  address:any
  productName: any;
  searchedProduct: any;
  oldProducts: any;
  newProducts: any;

  constructor(private service: ProjService, private local:LocalStorageService, private router: Router, private msg:MessengerService) {
    this.address={state:'', street:'', city:'', houseNo:'', pincode:''}
    this.editObject={custId: '', custName: '', email: '', mobileNo:'', loginId: '', password:'',address: this.address}
   }


  ngOnInit() {
    this.customer=JSON.parse(this.local.getLocal());
    this.service.getOldProducts(this.customer.custId).subscribe((result:any)=>{console.log(result); this.oldProducts = result;});
    this.service.getNewProducts().subscribe((result:any)=>{console.log(result); this.newProducts = result;} )
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
    //console.log("products",product.productId);

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





  

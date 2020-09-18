import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjService {
  private isUserLogged: any;
  custId = 0;
  loginId: any;
  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;

  }
  setUserLoggedIn(): void { // login success
    this.isUserLogged = true;
  }
  setUserLoggedOut(): void { // logout success
    this.isUserLogged = false;
  }
  getUserLogged(): any { // call this in AuthGuard
    return this.isUserLogged;
  }


  regCustomer(customer: any) {
    customer.custId = this.custId++;
    return this.httpClient.post('RESTAPI2018/webapi/myresource1/regCustomer/', customer);
  }
  Review(review: any) {

    return this.httpClient.post('RESTAPI2018/webapi/myresource1/Review/', review);
  }

  customerLogin(loginId: any, password: any) {
    console.log(loginId, password)
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/customerLogin/' + loginId + "/" + password);
  }

  getAllCustomers() {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewAllCustomers');
  }
  viewAllReviews() {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewAllReviews');
  }
  getAllProducts() {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewAllProducts');
  }
  addToCart(custId: any, productId: any, quantity: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/addItemToCart/' + custId + "/" + productId + "/" + quantity);
  }
  viewMyCart(custId: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewMyCart/' + custId);
  }
  placeOrder(custId: any) {
    return this.httpClient.post('RESTAPI2018/webapi/myresource1/placeOrder/', custId);
  }
  viewMyProductsAdded(custId: any) {
    console.log(custId);
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewMyProducts/' + custId);
  }
  postFile(sellForm: any, fileToUpload: File) {
    const endpoint = 'RESTAPI2018/webapi/myresource1/uploadImage';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('productName', sellForm.productName);
    formData.append('description', sellForm.description);
    formData.append('price', sellForm.price);
    formData.append('productStatus', sellForm.productStatus);
    formData.append('category', sellForm.category);
    formData.append('quantityAdded', sellForm.quantityAdded);
    formData.append('units', sellForm.units);
    formData.append('custId', sellForm.custId);

    return this.httpClient.post(endpoint, formData);
  }

  updateCust(customer: any) {
    return this.httpClient.put('RESTAPI2018/webapi/myresource1/updateCustomer/', customer);
  }
  deleteMyProduct(product: any) {
    return this.httpClient.delete('RESTAPI2018/webapi/myresource1/deleteMyProductAdded/' + product.productId);
  }

  getProductById(productId: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getProductById/' + productId);
  }
  searchProduct(productName: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/searchProduct/'+ productName);
  }
  deliverOrder(orderId: any) {
    return this.httpClient.post('RESTAPI2018/webapi/myresource1/deliverOrder/', orderId);
  }
  viewAllOrders() {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewAllOrders');
  }

  getOldProducts(custId: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getOldProducts/' + custId);
  }

  getNewProducts() {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/getNewProducts');
  }

  removeFromCart(cartId: any) {
    return this.httpClient.delete('RESTAPI2018/webapi/myresource1/removeFromCart/' + cartId);
  }
  deliverOrders() {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/deliverOrders');
  }
  viewMyOrders(custId:any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewMyOrders/'+custId);
  }
  viewCountOfOrders(custId:any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/viewCountOfOrders/'+custId);
  }

 /* updateCartQuantity(bookId: any, quantity: any, custId: any) {
    return this.httpClient.get('RESTAPI2018/webapi/myresource1/updateCartQuantity/'+bookId+"/"+ quantity+"/"+custId );
  }*/
  
}

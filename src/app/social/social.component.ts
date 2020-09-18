import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjService } from '../proj.service';
import { LoginComponent } from '../login/login.component';
import { LocalStorageService } from '../local-storage.service';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Router } from '@angular/router';
import { MessengerService } from '../messenger.service';
import { ThrowStmt } from '@angular/compiler';
declare var jQuery:any;

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  imageUrl: String;
  fileToUpload: File = null;
  reader: FileReader;
  products: any;
  customer: any;
  custId: any;
  constructor(private router: Router,private service: ProjService, private local: LocalStorageService) {

    this.imageUrl = '/assets/images/default.png';
    this.products = { productId: '', productName: '', description: '', productStatus: '', category: '', uploadedDate: '', quantityAdded: '',units:'', price: '', imageName: '', custId: '' };

  }

  ngOnInit(): void {
    this.customer = JSON.parse(this.local.getLocal());
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    this.reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
  }
  OnSubmit(sellForm: any) {
    if (this.customer == null) {
      this.products.productStatus = "new";
      sellForm.productStatus = this.products.productStatus;
      sellForm.custId = 0;
    }
    else {
      this.products.productStatus = "old";
      sellForm.quantityAdded = 1;
      sellForm.productStatus = this.products.productStatus;
      sellForm.custId = this.customer.custId;
    }
    this.service.postFile(sellForm, this.fileToUpload).subscribe(data => {
      console.log('done');
      this.imageUrl = '/assets/images/default.png';
      this.router.navigate(['my-products']);

    });
  }
  callLogOut() {
    this.local.logout();
    this.router.navigate(['login']);
  }
  routeTosellProduct() {
    this.local.logout();
    this.router.navigate(['social']);
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

import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css']
})
export class SellProductComponent implements OnInit {
  imageUrl: String;
  fileToUpload: File = null;
  reader: FileReader;
  products: any;
  customer: any;
  custId: any;
  constructor(private router: Router,private service: ProjService, private local: LocalStorageService) {

    this.imageUrl = '/assets/images/default.png';
    this.products = { productId: '', productName: '', description: '', productStatus: '', category: '', uploadedDate: '', quantityAdded: '',units: '', price: '', imageName: '', custId: '' };

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
      this.router.navigate(['admin-page']);

    });
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
  callHome() {
    this.router.navigate(['homepage']);
  }
}

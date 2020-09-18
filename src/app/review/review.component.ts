import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProjService } from '../proj.service';
import { ToastrService } from 'ngx-toastr';
declare var jQuery:any;


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
review:any;
customer:any;
  myProducts:any;
  editObject:any;

  constructor(private router: Router,private service: ProjService,
    private toastr: ToastrService) {

   }

  ngOnInit(): void {
    this.service.viewAllReviews().subscribe((result: any)=>{console.log(result); this.review=result;});

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

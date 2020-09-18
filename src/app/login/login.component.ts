import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjService } from '../proj.service';
import { LocalStorageService } from '../local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any
  constructor(private router: Router, private service: ProjService, private local: LocalStorageService,
    private toastr: ToastrService) {
    this.user = { loginId: '', password: '' };

  }

  result: any
  customer: any;
  lId: any;
  ngOnInit(): void {
  }
  loginSubmit(loginForm: any) {
    if (loginForm.loginId == 'admin' && loginForm.password == 'admin') {
      this.router.navigate(['admin-page']);
    }
    else {
      this.service.customerLogin(loginForm.loginId, loginForm.password).subscribe((result) => {
        this.customer = result; this.local.setLocal(JSON.stringify(this.customer)); console.log(this.customer);
        if (this.customer) {
         
          this.router.navigate(['products']);
        } else {
          this.toastr.error('Invalid credentials!', 'Login');
          //alert('Invalid credentials');
        }
      });


    }


  }

}




 //this.service.setUserLoggedId(loginForm.loginId);
/* this.service.customerLogin(loginForm.loginId, loginForm.password).subscribe((result) => {
 this.customer = result; console.log(this.customer);
 localStorage.setItem('customer', JSON.stringify(this.customer));

 this.service.customerLogin(loginForm.loginId, loginForm.password).subscribe((result) => {this.customer = result; console.log(result); });
   // console.log(this.customer);*/
    // console.log(localStorage.setItem('customer', JSON.stringify(this.customer)));

/* loginSubmit(loginForm: any): any {
    this.service.customerLogin(loginForm.loginId, loginForm.password).subscribe((result) => { console.log(result); })
    this.customer=this.result;

    localStorage.setItem('customer', JSON.stringify(this.customer));
    console.log(localStorage.setItem('customer', JSON.stringify(this.customer)));
    this.router.navigate(['books']);
    /*

  }*/

//localStorage.setItem('customer', JSON.stringify(this.result));
    //console.log(this.customer);
    //JSON.parse(localStorage.getItem('customer'));

 //this.service.customerLogin(loginForm.loginId, loginForm.password).subscribe((result) => { console.log(result); });



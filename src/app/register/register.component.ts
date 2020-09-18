import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProjService } from '../proj.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
customer:any;
address:any;
confirmPassword:any;
  constructor(private router: Router,private service: ProjService,
    private toastr: ToastrService ) {
    this.address={state:'', street:'', city:'', houseNo:'', pincode:''}
    this.customer = {custId: '', custName: '', email: '', mobileNo:'', loginId: '', password:'',address: this.address}
   }
 
  ngOnInit(): void {
  }
 register(registerForm: any): void {
    
    this.service.regCustomer(this.customer).subscribe((result: any) => { console.log(result); } );
    console.log(this.customer);
    this.toastr.success('Registration Successfull!', 'Register');
    this.router.navigate(['login']);

  }
  
}

import { Component, OnInit } from '@angular/core';
import {  ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NoSpaceValidator } from '../shared/validator/no-space.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServices } from '../shared/services/htttp-data-service';
import { UserDataService } from '../shared/services/User-data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  myReactiveForm : FormGroup | any;
  submitted = false;
constructor(private router : Router, private activeRoute : ActivatedRoute, private httpServ : HttpServices, private UserDataSer : UserDataService){}
  departmentArr:string[ ] = ['Sales','Production','Marketing','Account','Distribution']
ngOnInit(): void {
this.myReactiveForm = new FormGroup ({

  firstName : new FormControl ('', Validators.required),
  lastName : new FormControl ('', Validators.required),
    emailId : new FormControl ('', [Validators.required,Validators.email]),
    contactNumber : new FormControl ('', [Validators.required,Validators.minLength(10)]),
  userName : new FormControl ('',[NoSpaceValidator.noSpace, Validators.required]),
  userPassword : new FormControl ('', [Validators.required]),
  hodSatff: new FormControl ('',Validators.required),
  department : new FormControl ('',Validators.required)

  
})
 

}
onSubmit(){
  console.log(this.myReactiveForm.value)
  console.log(this.myReactiveForm.value.hodSatff, typeof this.myReactiveForm.value.hodSatff)
  this.submitted = true;
  this.httpServ.postUserData(this.myReactiveForm.value)
  localStorage.setItem("setUserInfo", JSON.stringify({userName : this.myReactiveForm.value.userName,userPassword : this.myReactiveForm.value.userPassword, userdepartment : this.myReactiveForm.value.department, firstName : this.myReactiveForm.value.firstName, lastName : this.myReactiveForm.value.lastName}));
this.httpServ.getUserData()
this.UserDataSer.getUserData()
 if(this.myReactiveForm.value.hodSatff === 'Hod'){
  this.router.navigate(['/Hod'],{relativeTo : this.activeRoute})
 }else{
  this.router.navigate(['/Staff'],{relativeTo : this.activeRoute})
 }
}


}
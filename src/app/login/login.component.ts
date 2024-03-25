import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDataService } from '../shared/services/User-data-service';
import { HttpServices } from '../shared/services/htttp-data-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnInit{
  myStdForm : FormGroup | any;
  constructor (private fb : FormBuilder,private UserDataSer: UserDataService, private HttpSer : HttpServices, private router : Router, private activeRoute : ActivatedRoute ){}
ngOnInit(): void {
  this.myStdForm = this.fb.group({
   
    userName: this.fb.control('',Validators.required),
    userPass : this.fb.control('',Validators.required)
  })

  this.UserDataSer.getUserData()
}
onSubmit(){
  console.log(this.myStdForm.value)
 

  const getUser = this.UserDataSer.getSingleUserDataUsingUserName(this.myStdForm.value.userName)
  console.log(getUser.userName)

  if( getUser.userPassword === this.myStdForm.value.userPass ){
    console.log('yes')
    this.UserDataSer.getUserData()
    localStorage.setItem("setUserInfo", JSON.stringify({userName : this.myStdForm.value.userName , userPassword : this.myStdForm.value.userPass, userdepartment : getUser.department, firstName :getUser.firstName, lastName : getUser.lastName})); 
    if(getUser.hodSatff === 'Hod'){
      this.router.navigate(['/Hod'],{relativeTo : this.activeRoute})
    }else{
      this.router.navigate(['/Staff'],{relativeTo : this.activeRoute})
    }
  }else{
    console.log('No')
  }

}
}


// [
//   {
//       "contactNumber": "08494954544",
//       "department": "Sales",
//       "emailId": "magadumsourabh@gamil.com",
//       "firstName": "Sourabh Magadum",
//       "hodSatff": "Hod",
//       "lastName": "Sourabh Magadum",
//       "userName": "sourabh",
//       "userPassword": "8/868698"
//   }
// ]